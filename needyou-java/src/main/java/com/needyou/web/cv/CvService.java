package com.needyou.web.cv;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.needyou.web.ai.AiService;
import com.needyou.web.auth.User;
import com.needyou.web.common.ApiException;
import com.needyou.web.job.JobAnalysis;
import com.needyou.web.job.JobService;
import com.needyou.web.profile.ProfileSnapshotBuilder;
import com.needyou.web.rate.RateLimitService;
import com.needyou.web.security.CurrentUser;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CvService {

    private final CurrentUser currentUser;
    private final JobService jobService;
    private final ProfileSnapshotBuilder profileSnapshotBuilder;
    private final GeneratedCvRepository generatedCvRepository;
    private final CvScoreRepository cvScoreRepository;
    private final AiService aiService;
    private final ObjectMapper objectMapper;
    private final RateLimitService rateLimitService;

    public CvService(
        CurrentUser currentUser,
        JobService jobService,
        ProfileSnapshotBuilder profileSnapshotBuilder,
        GeneratedCvRepository generatedCvRepository,
        CvScoreRepository cvScoreRepository,
        AiService aiService,
        ObjectMapper objectMapper,
        RateLimitService rateLimitService
    ) {
        this.currentUser = currentUser;
        this.jobService = jobService;
        this.profileSnapshotBuilder = profileSnapshotBuilder;
        this.generatedCvRepository = generatedCvRepository;
        this.cvScoreRepository = cvScoreRepository;
        this.aiService = aiService;
        this.objectMapper = objectMapper;
        this.rateLimitService = rateLimitService;
    }

    @Transactional
    public GenerateCvResponse generate(GenerateCvRequest request) {
        User user = currentUser.require();
        rateLimitService.check("cv:" + user.getId());
        JobAnalysis analysis = jobService.requireOwned(request.analysisId());

        String profileJson = profileSnapshotBuilder.buildJson();
        String jobJson = "{\"description\":\"" + analysis.getJobDescription().replace("\"", "'") + "\",\"keywords\":" + analysis.getKeywordsJson() + "}";
        String aiContent = aiService.generateCvJson(profileJson, jobJson, request.language().name());
        String content = normalizeCvJson(aiContent, request.language().name());

        GeneratedCv cv = new GeneratedCv();
        cv.setUser(user);
        cv.setJobAnalysis(analysis);
        cv.setLanguage(request.language());
        cv.setContentJson(content);
        cv.setPublicSlug(UUID.randomUUID().toString().substring(0, 8) + UUID.randomUUID().toString().substring(0, 8));
        generatedCvRepository.save(cv);

        return new GenerateCvResponse(cv.getId(), cv.getPublicSlug(), cv.getContentJson());
    }

    @Transactional
    public ScoreResponse score(ScoreRequest request) {
        User user = currentUser.require();
        rateLimitService.check("score:" + user.getId());
        JobAnalysis analysis = jobService.requireOwned(request.analysisId());
        GeneratedCv cv = generatedCvRepository.findById(request.cvId())
            .orElseThrow(() -> new ApiException("CV_NOT_FOUND", "CV not found"));
        if (!cv.getUser().getId().equals(user.getId())) {
            throw new ApiException("FORBIDDEN", "Not allowed");
        }

        String language = request.outputLanguage() == null ? cv.getLanguage().name() : request.outputLanguage().name();
        String raw = aiService.scoreCv(cv.getContentJson(), analysis.getJobDescription(), language);
        int score = 70;
        List<String> gaps = new ArrayList<>();
        List<String> recs = new ArrayList<>();
        try {
            JsonNode root = objectMapper.readTree(raw);
            score = root.path("score").asInt(70);
            root.path("gaps").forEach(n -> gaps.add(n.asText()));
            root.path("recommendations").forEach(n -> recs.add(n.asText()));
        } catch (Exception e) {
            gaps.add("Could not parse AI score output");
            recs.add("Add measurable achievements and keywords");
        }

        CvScore entity = new CvScore();
        entity.setUser(user);
        entity.setGeneratedCv(cv);
        entity.setJobAnalysis(analysis);
        entity.setScore(score);
        entity.setGapsJson(toJson(gaps));
        entity.setRecommendationsJson(toJson(recs));
        cvScoreRepository.save(entity);

        return new ScoreResponse(entity.getId(), score, gaps, recs, raw);
    }

    public GeneratedCv requireOwnedCv(UUID id) {
        User user = currentUser.require();
        GeneratedCv cv = generatedCvRepository.findById(id).orElseThrow(() -> new ApiException("CV_NOT_FOUND", "CV not found"));
        if (!cv.getUser().getId().equals(user.getId())) {
            throw new ApiException("FORBIDDEN", "Not allowed");
        }
        return cv;
    }

    public GeneratedCv getByPublicSlug(String slug) {
        return generatedCvRepository.findByPublicSlug(slug).orElseThrow(() -> new ApiException("PUBLIC_CV_NOT_FOUND", "Public CV not found"));
    }

    private String normalizeCvJson(String raw, String language) {
        try {
            JsonNode root = objectMapper.readTree(raw);
            if (root.has("full_name") && root.has("summary")) {
                return objectMapper.writeValueAsString(root);
            }
        } catch (Exception ignored) {
        }
        return "{\"full_name\":\"Candidate\",\"title\":\"Professional\",\"summary\":\"Generated with fallback\",\"skills\":[\"Communication\"],\"experience\":[{\"role\":\"Role\",\"company\":\"Company\",\"impact\":\"Delivered results\"}],\"education\":[{\"degree\":\"Degree\",\"school\":\"School\"}],\"keywords_used\":[\"teamwork\"],\"language\":\"" + language + "\"}";
    }

    private String toJson(Object data) {
        try {
            return objectMapper.writeValueAsString(data);
        } catch (Exception e) {
            return "[]";
        }
    }
}

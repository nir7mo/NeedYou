package com.needyou.web.job;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.needyou.web.ai.AiService;
import com.needyou.web.auth.User;
import com.needyou.web.common.ApiException;
import com.needyou.web.rate.RateLimitService;
import com.needyou.web.security.CurrentUser;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class JobService {

    private final CurrentUser currentUser;
    private final JobAnalysisRepository repository;
    private final AiService aiService;
    private final ObjectMapper objectMapper;
    private final RateLimitService rateLimitService;

    public JobService(CurrentUser currentUser, JobAnalysisRepository repository, AiService aiService, ObjectMapper objectMapper, RateLimitService rateLimitService) {
        this.currentUser = currentUser;
        this.repository = repository;
        this.aiService = aiService;
        this.objectMapper = objectMapper;
        this.rateLimitService = rateLimitService;
    }

    @Transactional
    public JobAnalyzeResponse analyze(JobAnalyzeRequest request) {
        User user = currentUser.require();
        rateLimitService.check("jobs:" + user.getId());

        String language = request.outputLanguage() == null ? "AR" : request.outputLanguage().name();
        String aiRaw = aiService.parseJob(request.jobDescription(), language);
        List<String> keywords = new ArrayList<>();
        List<String> requirements = new ArrayList<>();
        try {
            JsonNode root = objectMapper.readTree(aiRaw);
            root.path("keywords").forEach(n -> keywords.add(n.asText()));
            root.path("requirements").forEach(n -> requirements.add(n.asText()));
        } catch (Exception e) {
            throw new ApiException("JOB_PARSE_ERROR", "Failed to parse AI response");
        }

        JobAnalysis analysis = new JobAnalysis();
        analysis.setUser(user);
        analysis.setJobUrl(request.jobUrl());
        analysis.setJobDescription(request.jobDescription());
        analysis.setKeywordsJson(toJson(keywords));
        analysis.setRequirementsJson(toJson(requirements));
        repository.save(analysis);

        return new JobAnalyzeResponse(analysis.getId(), keywords, requirements, aiRaw);
    }

    public JobAnalysis requireOwned(UUID id) {
        User user = currentUser.require();
        JobAnalysis analysis = repository.findById(id).orElseThrow(() -> new ApiException("JOB_NOT_FOUND", "Job analysis not found"));
        if (!analysis.getUser().getId().equals(user.getId())) {
            throw new ApiException("FORBIDDEN", "Not allowed");
        }
        return analysis;
    }

    private String toJson(Object data) {
        try {
            return objectMapper.writeValueAsString(data);
        } catch (Exception e) {
            return "[]";
        }
    }
}

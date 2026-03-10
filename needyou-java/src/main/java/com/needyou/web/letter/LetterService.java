package com.needyou.web.letter;

import com.needyou.web.ai.AiService;
import com.needyou.web.auth.User;
import com.needyou.web.job.JobAnalysis;
import com.needyou.web.job.JobService;
import com.needyou.web.profile.ProfileSnapshotBuilder;
import com.needyou.web.rate.RateLimitService;
import com.needyou.web.security.CurrentUser;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LetterService {

    private final CurrentUser currentUser;
    private final JobService jobService;
    private final ProfileSnapshotBuilder profileSnapshotBuilder;
    private final AiService aiService;
    private final GeneratedLetterRepository repository;
    private final RateLimitService rateLimitService;

    public LetterService(CurrentUser currentUser, JobService jobService, ProfileSnapshotBuilder profileSnapshotBuilder,
                         AiService aiService, GeneratedLetterRepository repository, RateLimitService rateLimitService) {
        this.currentUser = currentUser;
        this.jobService = jobService;
        this.profileSnapshotBuilder = profileSnapshotBuilder;
        this.aiService = aiService;
        this.repository = repository;
        this.rateLimitService = rateLimitService;
    }

    @Transactional
    public GenerateLetterResponse generate(GenerateLetterRequest request) {
        User user = currentUser.require();
        rateLimitService.check("letter:" + user.getId());
        JobAnalysis analysis = jobService.requireOwned(request.analysisId());
        String profileJson = profileSnapshotBuilder.buildJson();
        String jobJson = "{\"description\":\"" + analysis.getJobDescription().replace("\"", "'") + "\"}";
        String text = aiService.generateCoverLetter(profileJson, jobJson, request.language().name());

        GeneratedLetter letter = new GeneratedLetter();
        letter.setUser(user);
        letter.setJobAnalysis(analysis);
        letter.setLanguage(request.language());
        letter.setContent(text);
        repository.save(letter);

        return new GenerateLetterResponse(letter.getId(), letter.getContent());
    }
}

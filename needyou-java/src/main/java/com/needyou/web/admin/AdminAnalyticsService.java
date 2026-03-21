package com.needyou.web.admin;

import com.needyou.web.auth.SubscriptionPlan;
import com.needyou.web.auth.UserRepository;
import com.needyou.web.auth.UserRole;
import com.needyou.web.business.ManagedProfileRepository;
import com.needyou.web.cv.CvScoreRepository;
import com.needyou.web.cv.GeneratedCvRepository;
import com.needyou.web.job.JobAnalysisRepository;
import com.needyou.web.letter.GeneratedLetterRepository;
import com.needyou.web.profile.ProfileRepository;
import com.needyou.web.storage.UploadedDocumentRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminAnalyticsService {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final ManagedProfileRepository managedProfileRepository;
    private final JobAnalysisRepository jobAnalysisRepository;
    private final GeneratedCvRepository generatedCvRepository;
    private final GeneratedLetterRepository generatedLetterRepository;
    private final UploadedDocumentRepository uploadedDocumentRepository;
    private final CvScoreRepository cvScoreRepository;

    public AdminAnalyticsService(
        UserRepository userRepository,
        ProfileRepository profileRepository,
        ManagedProfileRepository managedProfileRepository,
        JobAnalysisRepository jobAnalysisRepository,
        GeneratedCvRepository generatedCvRepository,
        GeneratedLetterRepository generatedLetterRepository,
        UploadedDocumentRepository uploadedDocumentRepository,
        CvScoreRepository cvScoreRepository
    ) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
        this.managedProfileRepository = managedProfileRepository;
        this.jobAnalysisRepository = jobAnalysisRepository;
        this.generatedCvRepository = generatedCvRepository;
        this.generatedLetterRepository = generatedLetterRepository;
        this.uploadedDocumentRepository = uploadedDocumentRepository;
        this.cvScoreRepository = cvScoreRepository;
    }

    public AdminAnalyticsResponse getAnalytics() {
        long totalUsers = userRepository.count();
        long verifiedUsers = userRepository.findAll().stream().filter(u -> u.isEmailVerified()).count();
        long adminUsers = userRepository.findAll().stream().filter(u -> u.getRole() == UserRole.ADMIN).count();
        long businessUsers = userRepository.findAll().stream().filter(u -> u.getSubscriptionPlan() == SubscriptionPlan.BUSINESS).count();
        long totalProfiles = profileRepository.count();
        long totalManagedProfiles = managedProfileRepository.count();
        long totalJobAnalyses = jobAnalysisRepository.count();
        long totalGeneratedCvs = generatedCvRepository.count();
        long totalLetters = generatedLetterRepository.count();
        long totalUploads = uploadedDocumentRepository.count();
        double avgScore = cvScoreRepository.findAll().stream().mapToInt(s -> s.getScore()).average().orElse(0.0);

        return new AdminAnalyticsResponse(
            totalUsers,
            verifiedUsers,
            adminUsers,
            businessUsers,
            totalProfiles,
            totalManagedProfiles,
            totalJobAnalyses,
            totalGeneratedCvs,
            totalLetters,
            totalUploads,
            Math.round(avgScore * 100.0) / 100.0
        );
    }
}

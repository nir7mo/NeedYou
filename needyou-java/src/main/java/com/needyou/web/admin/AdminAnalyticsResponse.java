package com.needyou.web.admin;

public record AdminAnalyticsResponse(
    long totalUsers,
    long verifiedUsers,
    long adminUsers,
    long businessUsers,
    long totalProfiles,
    long totalManagedProfiles,
    long totalJobAnalyses,
    long totalGeneratedCvs,
    long totalLetters,
    long totalUploads,
    double averageCvScore
) {}

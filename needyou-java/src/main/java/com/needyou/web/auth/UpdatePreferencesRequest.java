package com.needyou.web.auth;

public record UpdatePreferencesRequest(
    String uiLanguage,
    SubscriptionPlan plan
) {}

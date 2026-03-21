package com.needyou.web.auth;

public record AccountResponse(
    String email,
    String fullName,
    String phone,
    String role,
    String plan,
    boolean emailVerified,
    boolean personalInfoLocked,
    String uiLanguage
) {}

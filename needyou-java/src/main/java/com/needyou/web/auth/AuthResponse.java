package com.needyou.web.auth;

public record AuthResponse(
    String token,
    String email,
    boolean emailVerified,
    String role,
    String plan,
    String uiLanguage,
    String message
) {}

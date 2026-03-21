package com.needyou.web.auth;

import jakarta.validation.constraints.*;

public record RegisterRequest(
    @NotBlank String fullName,
    @Email @NotBlank String email,
    @NotBlank String phone,
    @Size(min = 8, max = 120) String password
) {}

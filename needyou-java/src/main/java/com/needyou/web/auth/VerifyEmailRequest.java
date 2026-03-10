package com.needyou.web.auth;

import jakarta.validation.constraints.*;

public record VerifyEmailRequest(
    @Email @NotBlank String email,
    @NotBlank @Size(min = 4, max = 8) String code
) {}

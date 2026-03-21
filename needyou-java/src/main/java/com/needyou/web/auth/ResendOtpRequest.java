package com.needyou.web.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ResendOtpRequest(
    @Email @NotBlank String email
) {}

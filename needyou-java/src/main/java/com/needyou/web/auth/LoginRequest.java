package com.needyou.web.auth;

import jakarta.validation.constraints.*;

public record LoginRequest(
    @Email @NotBlank String email,
    @NotBlank String password
) {}

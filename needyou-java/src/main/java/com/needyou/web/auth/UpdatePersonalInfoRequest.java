package com.needyou.web.auth;

import jakarta.validation.constraints.NotBlank;

public record UpdatePersonalInfoRequest(
    @NotBlank String fullName,
    @NotBlank String phone
) {}

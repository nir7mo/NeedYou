package com.needyou.web.business;

import jakarta.validation.constraints.NotBlank;

public record ManagedProfileRequest(
    @NotBlank String fullName,
    String phone,
    String headline,
    String summary,
    String countryCode,
    String stateCode,
    String city
) {}

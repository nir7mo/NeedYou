package com.needyou.web.business;

import java.util.UUID;

public record ManagedProfileResponse(
    UUID id,
    String fullName,
    String phone,
    String headline,
    String summary,
    String countryCode,
    String stateCode,
    String city
) {}

package com.needyou.web.profile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.needyou.web.common.ApiException;
import org.springframework.stereotype.Component;

@Component
public class ProfileSnapshotBuilder {
    private final ProfileService profileService;
    private final ObjectMapper objectMapper;

    public ProfileSnapshotBuilder(ProfileService profileService, ObjectMapper objectMapper) {
        this.profileService = profileService;
        this.objectMapper = objectMapper;
    }

    public String buildJson() {
        try {
            return objectMapper.writeValueAsString(profileService.getMyProfile());
        } catch (JsonProcessingException e) {
            throw new ApiException("PROFILE_SERIALIZE_ERROR", "Failed to serialize profile");
        }
    }
}

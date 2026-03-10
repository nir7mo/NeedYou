package com.needyou.web.profile;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ProfileResponse get() {
        return profileService.getMyProfile();
    }

    @PutMapping
    public ProfileResponse upsert(@Valid @RequestBody ProfileRequest request) {
        return profileService.upsertMyProfile(request);
    }

    @PutMapping("/public-settings")
    public ProfileResponse publicSettings(@RequestBody PublicSettingsRequest request) {
        return profileService.updatePublicSettings(request);
    }
}

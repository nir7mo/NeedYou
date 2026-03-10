package com.needyou.web.publicprofile;

import com.needyou.web.profile.ProfileResponse;
import com.needyou.web.profile.ProfileService;
import com.needyou.web.profile.ProfileVisibility;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class PublicProfileController {

    private final ProfileService profileService;

    public PublicProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/u/{publicSlug}")
    public String publicProfile(@PathVariable String publicSlug, Model model) {
        ProfileResponse profile = profileService.getPublicProfileBySlug(publicSlug);
        if (profile.visibility() == ProfileVisibility.PRIVATE) {
            return "redirect:/";
        }
        model.addAttribute("p", profile);
        return "user-public-profile";
    }
}

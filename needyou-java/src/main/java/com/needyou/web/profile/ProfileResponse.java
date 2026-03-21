package com.needyou.web.profile;

import com.needyou.web.common.LanguageCode;
import java.util.List;

public record ProfileResponse(
    String fullName,
    String email,
    String phone,
    String headline,
    String summary,
    String countryCode,
    String stateCode,
    String city,
    String linkedinUrl,
    String portfolioUrl,
    String publicSlug,
    ProfileVisibility visibility,
    List<ProfileRequest.EducationItem> education,
    List<ProfileRequest.ExperienceItem> experiences,
    List<ProfileRequest.SkillItem> skills,
    List<ProfileRequest.ToolItem> tools,
    List<ProfileRequest.ProjectItem> projects,
    List<ProfileRequest.CertificateItem> certificates,
    List<LanguageView> languages
) {
    public record LanguageView(LanguageCode code, String level) {}
}

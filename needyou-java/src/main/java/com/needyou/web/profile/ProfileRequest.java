package com.needyou.web.profile;

import com.needyou.web.common.LanguageCode;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

public record ProfileRequest(
    String headline,
    String summary,
    String countryCode,
    String stateCode,
    String city,
    String linkedinUrl,
    String portfolioUrl,
    @Valid List<EducationItem> education,
    @Valid List<ExperienceItem> experiences,
    @Valid List<SkillItem> skills,
    @Valid List<ToolItem> tools,
    @Valid List<ProjectItem> projects,
    @Valid List<CertificateItem> certificates,
    @Valid List<LanguageItem> languages
) {
    public record EducationItem(@NotBlank String institution, @NotBlank String degree, String fieldOfStudy, String startDate, String endDate) {}
    public record ExperienceItem(@NotBlank String title, @NotBlank String company, String startDate, String endDate, String description) {}
    public record SkillItem(@NotBlank String name, String level) {}
    public record ToolItem(@NotBlank String name, String level) {}
    public record ProjectItem(@NotBlank String name, String description, String url) {}
    public record CertificateItem(@NotBlank String name, String issuer, String issueDate) {}
    public record LanguageItem(LanguageCode code, String level) {}
}

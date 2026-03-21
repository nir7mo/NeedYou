package com.needyou.web.profile;

import com.needyou.web.auth.User;
import com.needyou.web.common.ApiException;
import com.needyou.web.security.CurrentUser;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProfileService {

    private final CurrentUser currentUser;
    private final ProfileRepository profileRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ToolRepository toolRepository;
    private final ProjectRepository projectRepository;
    private final CertificateRepository certificateRepository;
    private final ProfileLanguageRepository languageRepository;

    public ProfileService(
        CurrentUser currentUser,
        ProfileRepository profileRepository,
        ExperienceRepository experienceRepository,
        EducationRepository educationRepository,
        SkillRepository skillRepository,
        ToolRepository toolRepository,
        ProjectRepository projectRepository,
        CertificateRepository certificateRepository,
        ProfileLanguageRepository languageRepository
    ) {
        this.currentUser = currentUser;
        this.profileRepository = profileRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.skillRepository = skillRepository;
        this.toolRepository = toolRepository;
        this.projectRepository = projectRepository;
        this.certificateRepository = certificateRepository;
        this.languageRepository = languageRepository;
    }

    public ProfileResponse getMyProfile() {
        User user = currentUser.require();
        Profile profile = profileRepository.findByUserId(user.getId())
            .orElseThrow(() -> new ApiException("PROFILE_NOT_FOUND", "Profile not found"));
        return map(user, profile);
    }

    @Transactional
    public ProfileResponse upsertMyProfile(ProfileRequest request) {
        User user = currentUser.require();
        Profile profile = profileRepository.findByUserId(user.getId()).orElseGet(() -> {
            Profile p = new Profile();
            p.setUser(user);
            p.setPublicSlug(UUID.randomUUID().toString().replace("-", "").substring(0, 16));
            p.setVisibility(ProfileVisibility.PRIVATE);
            return p;
        });

        profile.setHeadline(request.headline());
        profile.setSummary(request.summary());
        profile.setCountryCode(request.countryCode());
        profile.setStateCode(request.stateCode());
        profile.setCity(request.city());
        profile.setLinkedinUrl(request.linkedinUrl());
        profile.setPortfolioUrl(request.portfolioUrl());
        profile = profileRepository.save(profile);

        clearChildCollections(profile);

        for (ProfileRequest.EducationItem item : safe(request.education())) {
            Education e = new Education();
            e.setProfile(profile);
            e.setInstitution(item.institution());
            e.setDegree(item.degree());
            e.setFieldOfStudy(item.fieldOfStudy());
            e.setStartDate(item.startDate());
            e.setEndDate(item.endDate());
            educationRepository.save(e);
        }
        for (ProfileRequest.ExperienceItem item : safe(request.experiences())) {
            Experience e = new Experience();
            e.setProfile(profile);
            e.setTitle(item.title());
            e.setCompany(item.company());
            e.setStartDate(item.startDate());
            e.setEndDate(item.endDate());
            e.setDescription(item.description());
            experienceRepository.save(e);
        }
        for (ProfileRequest.SkillItem item : safe(request.skills())) {
            Skill s = new Skill();
            s.setProfile(profile);
            s.setName(item.name());
            s.setLevel(item.level());
            skillRepository.save(s);
        }
        for (ProfileRequest.ToolItem item : safe(request.tools())) {
            Tool t = new Tool();
            t.setProfile(profile);
            t.setName(item.name());
            t.setLevel(item.level());
            toolRepository.save(t);
        }
        for (ProfileRequest.ProjectItem item : safe(request.projects())) {
            Project p = new Project();
            p.setProfile(profile);
            p.setName(item.name());
            p.setDescription(item.description());
            p.setUrl(item.url());
            projectRepository.save(p);
        }
        for (ProfileRequest.CertificateItem item : safe(request.certificates())) {
            Certificate c = new Certificate();
            c.setProfile(profile);
            c.setName(item.name());
            c.setIssuer(item.issuer());
            c.setIssueDate(item.issueDate());
            certificateRepository.save(c);
        }
        for (ProfileRequest.LanguageItem item : safe(request.languages())) {
            ProfileLanguage l = new ProfileLanguage();
            l.setProfile(profile);
            l.setCode(item.code());
            l.setLevel(item.level());
            languageRepository.save(l);
        }

        return map(user, profile);
    }

    @Transactional
    public ProfileResponse updatePublicSettings(PublicSettingsRequest request) {
        User user = currentUser.require();
        Profile profile = profileRepository.findByUserId(user.getId())
            .orElseThrow(() -> new ApiException("PROFILE_NOT_FOUND", "Profile not found"));
        profile.setVisibility(request.visibility() == null ? ProfileVisibility.PRIVATE : request.visibility());
        profileRepository.save(profile);
        return map(user, profile);
    }

    public ProfileResponse getPublicProfileBySlug(String slug) {
        Profile profile = profileRepository.findByPublicSlug(slug)
            .orElseThrow(() -> new ApiException("PUBLIC_PROFILE_NOT_FOUND", "Public profile not found"));
        if (profile.getVisibility() == ProfileVisibility.PRIVATE) {
            throw new ApiException("PROFILE_PRIVATE", "Profile is private");
        }
        return map(profile.getUser(), profile);
    }

    private ProfileResponse map(User user, Profile profile) {
        List<ProfileRequest.EducationItem> education = educationRepository.findByProfileId(profile.getId()).stream()
            .map(e -> new ProfileRequest.EducationItem(e.getInstitution(), e.getDegree(), e.getFieldOfStudy(), e.getStartDate(), e.getEndDate())).toList();
        List<ProfileRequest.ExperienceItem> experiences = experienceRepository.findByProfileId(profile.getId()).stream()
            .map(e -> new ProfileRequest.ExperienceItem(e.getTitle(), e.getCompany(), e.getStartDate(), e.getEndDate(), e.getDescription())).toList();
        List<ProfileRequest.SkillItem> skills = skillRepository.findByProfileId(profile.getId()).stream()
            .map(s -> new ProfileRequest.SkillItem(s.getName(), s.getLevel())).toList();
        List<ProfileRequest.ToolItem> tools = toolRepository.findByProfileId(profile.getId()).stream()
            .map(t -> new ProfileRequest.ToolItem(t.getName(), t.getLevel())).toList();
        List<ProfileRequest.ProjectItem> projects = projectRepository.findByProfileId(profile.getId()).stream()
            .map(p -> new ProfileRequest.ProjectItem(p.getName(), p.getDescription(), p.getUrl())).toList();
        List<ProfileRequest.CertificateItem> certificates = certificateRepository.findByProfileId(profile.getId()).stream()
            .map(c -> new ProfileRequest.CertificateItem(c.getName(), c.getIssuer(), c.getIssueDate())).toList();
        List<ProfileResponse.LanguageView> languages = languageRepository.findByProfileId(profile.getId()).stream()
            .map(l -> new ProfileResponse.LanguageView(l.getCode(), l.getLevel())).toList();

        return new ProfileResponse(
            user.getFullName(), user.getEmail(), user.getPhone(),
            profile.getHeadline(), profile.getSummary(), profile.getCountryCode(), profile.getStateCode(), profile.getCity(),
            profile.getLinkedinUrl(), profile.getPortfolioUrl(), profile.getPublicSlug(), profile.getVisibility(),
            education, experiences, skills, tools, projects, certificates, languages
        );
    }

    private void clearChildCollections(Profile profile) {
        experienceRepository.deleteByProfileId(profile.getId());
        educationRepository.deleteByProfileId(profile.getId());
        skillRepository.deleteByProfileId(profile.getId());
        toolRepository.deleteByProfileId(profile.getId());
        projectRepository.deleteByProfileId(profile.getId());
        certificateRepository.deleteByProfileId(profile.getId());
        languageRepository.deleteByProfileId(profile.getId());
    }

    private <T> List<T> safe(List<T> list) {
        return list == null ? Collections.emptyList() : list;
    }
}

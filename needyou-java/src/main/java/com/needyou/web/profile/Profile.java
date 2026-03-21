package com.needyou.web.profile;

import com.needyou.web.auth.User;
import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", unique = true)
    private User user;

    private String headline;
    @Column(length = 3000)
    private String summary;

    private String countryCode;
    private String stateCode;
    private String city;

    private String linkedinUrl;
    private String portfolioUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProfileVisibility visibility = ProfileVisibility.PRIVATE;

    @Column(nullable = false, unique = true)
    private String publicSlug;

    public UUID getId() { return id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public String getHeadline() { return headline; }
    public void setHeadline(String headline) { this.headline = headline; }
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    public String getCountryCode() { return countryCode; }
    public void setCountryCode(String countryCode) { this.countryCode = countryCode; }
    public String getStateCode() { return stateCode; }
    public void setStateCode(String stateCode) { this.stateCode = stateCode; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getLinkedinUrl() { return linkedinUrl; }
    public void setLinkedinUrl(String linkedinUrl) { this.linkedinUrl = linkedinUrl; }
    public String getPortfolioUrl() { return portfolioUrl; }
    public void setPortfolioUrl(String portfolioUrl) { this.portfolioUrl = portfolioUrl; }
    public ProfileVisibility getVisibility() { return visibility; }
    public void setVisibility(ProfileVisibility visibility) { this.visibility = visibility; }
    public String getPublicSlug() { return publicSlug; }
    public void setPublicSlug(String publicSlug) { this.publicSlug = publicSlug; }
}

package com.needyou.web.letter;

import com.needyou.web.auth.User;
import com.needyou.web.common.LanguageCode;
import com.needyou.web.job.JobAnalysis;
import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "generated_letters")
public class GeneratedLetter {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    private User user;

    @ManyToOne(optional = false)
    private JobAnalysis jobAnalysis;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private LanguageCode language;

    @Column(nullable = false, length = 20000)
    private String content;

    @Column(nullable = false)
    private Instant createdAt = Instant.now();

    public UUID getId() { return id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public JobAnalysis getJobAnalysis() { return jobAnalysis; }
    public void setJobAnalysis(JobAnalysis jobAnalysis) { this.jobAnalysis = jobAnalysis; }
    public LanguageCode getLanguage() { return language; }
    public void setLanguage(LanguageCode language) { this.language = language; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public Instant getCreatedAt() { return createdAt; }
}

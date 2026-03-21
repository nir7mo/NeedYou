package com.needyou.web.cv;

import com.needyou.web.auth.User;
import com.needyou.web.job.JobAnalysis;
import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "cv_scores")
public class CvScore {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    private User user;

    @ManyToOne(optional = false)
    private JobAnalysis jobAnalysis;

    @ManyToOne(optional = false)
    private GeneratedCv generatedCv;

    private int score;

    @Column(length = 10000)
    private String gapsJson;

    @Column(length = 10000)
    private String recommendationsJson;

    @Column(nullable = false)
    private Instant createdAt = Instant.now();

    public UUID getId() { return id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public JobAnalysis getJobAnalysis() { return jobAnalysis; }
    public void setJobAnalysis(JobAnalysis jobAnalysis) { this.jobAnalysis = jobAnalysis; }
    public GeneratedCv getGeneratedCv() { return generatedCv; }
    public void setGeneratedCv(GeneratedCv generatedCv) { this.generatedCv = generatedCv; }
    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
    public String getGapsJson() { return gapsJson; }
    public void setGapsJson(String gapsJson) { this.gapsJson = gapsJson; }
    public String getRecommendationsJson() { return recommendationsJson; }
    public void setRecommendationsJson(String recommendationsJson) { this.recommendationsJson = recommendationsJson; }
    public Instant getCreatedAt() { return createdAt; }
}

package com.needyou.web.job;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobAnalysisRepository extends JpaRepository<JobAnalysis, UUID> {
    List<JobAnalysis> findByUserIdOrderByCreatedAtDesc(UUID userId);
}

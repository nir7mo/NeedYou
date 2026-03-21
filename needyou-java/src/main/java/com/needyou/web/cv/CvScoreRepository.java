package com.needyou.web.cv;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CvScoreRepository extends JpaRepository<CvScore, UUID> {
    List<CvScore> findByUserIdOrderByCreatedAtDesc(UUID userId);
}

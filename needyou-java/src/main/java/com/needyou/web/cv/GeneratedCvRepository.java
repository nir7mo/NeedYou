package com.needyou.web.cv;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GeneratedCvRepository extends JpaRepository<GeneratedCv, UUID> {
    List<GeneratedCv> findByUserIdOrderByCreatedAtDesc(UUID userId);
    Optional<GeneratedCv> findByPublicSlug(String publicSlug);
}

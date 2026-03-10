package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<Experience, UUID> {
    List<Experience> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, UUID> {
    List<Education> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, UUID> {
    List<Skill> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

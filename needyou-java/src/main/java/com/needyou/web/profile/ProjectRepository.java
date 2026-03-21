package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
    List<Project> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

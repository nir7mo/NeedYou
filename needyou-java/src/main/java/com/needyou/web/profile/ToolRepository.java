package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToolRepository extends JpaRepository<Tool, UUID> {
    List<Tool> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

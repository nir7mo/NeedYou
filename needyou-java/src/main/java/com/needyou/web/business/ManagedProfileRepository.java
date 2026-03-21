package com.needyou.web.business;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagedProfileRepository extends JpaRepository<ManagedProfile, UUID> {
    List<ManagedProfile> findByOwnerIdOrderByCreatedAtDesc(UUID ownerId);
}

package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificateRepository extends JpaRepository<Certificate, UUID> {
    List<Certificate> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

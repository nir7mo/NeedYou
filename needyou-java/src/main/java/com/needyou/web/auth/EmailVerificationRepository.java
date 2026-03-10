package com.needyou.web.auth;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailVerificationRepository extends JpaRepository<EmailVerification, UUID> {
    Optional<EmailVerification> findTopByEmailAndUsedFalseOrderByExpiresAtDesc(String email);
    void deleteByExpiresAtBefore(Instant now);
}

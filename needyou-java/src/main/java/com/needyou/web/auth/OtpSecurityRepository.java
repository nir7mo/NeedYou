package com.needyou.web.auth;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OtpSecurityRepository extends JpaRepository<OtpSecurity, UUID> {
    Optional<OtpSecurity> findByEmailIgnoreCase(String email);
}

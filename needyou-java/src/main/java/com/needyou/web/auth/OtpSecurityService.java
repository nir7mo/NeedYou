package com.needyou.web.auth;

import com.needyou.web.common.ApiException;
import java.time.Instant;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OtpSecurityService {

    private final OtpSecurityRepository repository;
    private final int maxAttempts;
    private final int lockMinutes;

    public OtpSecurityService(
        OtpSecurityRepository repository,
        @Value("${app.auth.otp-max-attempts:5}") int maxAttempts,
        @Value("${app.auth.otp-lock-minutes:30}") int lockMinutes
    ) {
        this.repository = repository;
        this.maxAttempts = maxAttempts;
        this.lockMinutes = lockMinutes;
    }

    @Transactional
    public void ensureNotLocked(String email) {
        OtpSecurity s = repository.findByEmailIgnoreCase(email).orElse(null);
        if (s != null && s.getLockedUntil() != null && s.getLockedUntil().isAfter(Instant.now())) {
            throw new ApiException("OTP_LOCKED", "OTP verification locked. Try again later.");
        }
    }

    @Transactional
    public void onFailedAttempt(String email) {
        OtpSecurity s = repository.findByEmailIgnoreCase(email).orElseGet(() -> {
            OtpSecurity n = new OtpSecurity();
            n.setEmail(email.toLowerCase());
            n.setFailedAttempts(0);
            return n;
        });

        s.setFailedAttempts(s.getFailedAttempts() + 1);
        if (s.getFailedAttempts() >= maxAttempts) {
            s.setLockedUntil(Instant.now().plusSeconds((long) lockMinutes * 60));
            s.setFailedAttempts(0);
        }
        s.setUpdatedAt(Instant.now());
        repository.save(s);
    }

    @Transactional
    public void onSuccess(String email) {
        OtpSecurity s = repository.findByEmailIgnoreCase(email).orElse(null);
        if (s != null) {
            s.setFailedAttempts(0);
            s.setLockedUntil(null);
            s.setUpdatedAt(Instant.now());
            repository.save(s);
        }
    }
}

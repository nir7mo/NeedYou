package com.needyou.web.auth;

import com.needyou.web.common.ApiException;
import com.needyou.web.profile.Profile;
import com.needyou.web.profile.ProfileRepository;
import com.needyou.web.profile.ProfileVisibility;
import com.needyou.web.security.JwtService;
import java.time.Instant;
import java.util.Random;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final EmailVerificationRepository emailVerificationRepository;
    private final ProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final OtpMailService otpMailService;
    private final OtpSecurityService otpSecurityService;
    private final boolean debugOtp;
    private final int otpExpirationMinutes;

    public AuthService(
        UserRepository userRepository,
        EmailVerificationRepository emailVerificationRepository,
        ProfileRepository profileRepository,
        PasswordEncoder passwordEncoder,
        JwtService jwtService,
        OtpMailService otpMailService,
        OtpSecurityService otpSecurityService,
        @Value("${app.auth.debug-otp:true}") boolean debugOtp,
        @Value("${app.auth.otp-expiration-minutes:15}") int otpExpirationMinutes
    ) {
        this.userRepository = userRepository;
        this.emailVerificationRepository = emailVerificationRepository;
        this.profileRepository = profileRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.otpMailService = otpMailService;
        this.otpSecurityService = otpSecurityService;
        this.debugOtp = debugOtp;
        this.otpExpirationMinutes = otpExpirationMinutes;
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        userRepository.findByEmailIgnoreCase(request.email()).ifPresent(u -> {
            throw new ApiException("EMAIL_EXISTS", "Email already registered");
        });

        User user = new User();
        user.setFullName(request.fullName());
        user.setEmail(request.email().toLowerCase());
        user.setPhone(request.phone());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        user.setEmailVerified(false);
        user.setRole(UserRole.USER);
        user.setSubscriptionPlan(SubscriptionPlan.FREE);
        user.setPreferredUiLanguage("ar");
        userRepository.save(user);

        Profile profile = new Profile();
        profile.setUser(user);
        profile.setCountryCode("DZ");
        profile.setVisibility(ProfileVisibility.PRIVATE);
        profile.setPublicSlug(UUID.randomUUID().toString().replace("-", "").substring(0, 16));
        profileRepository.save(profile);

        String otp = issueOtp(user.getEmail());

        String token = jwtService.generateToken(user.getId().toString(), user.getEmail(), user.getRole().name());
        String msg = debugOtp ? "Registered. OTP: " + otp : "Registered. Verification code sent to your email.";
        return new AuthResponse(token, user.getEmail(), false, user.getRole().name(), user.getSubscriptionPlan().name(), user.getPreferredUiLanguage(), msg);
    }

    @Transactional
    public AuthResponse verifyEmail(VerifyEmailRequest request) {
        User user = userRepository.findByEmailIgnoreCase(request.email())
            .orElseThrow(() -> new ApiException("NOT_FOUND", "User not found"));

        otpSecurityService.ensureNotLocked(user.getEmail());

        EmailVerification verification = emailVerificationRepository
            .findTopByEmailAndUsedFalseOrderByExpiresAtDesc(request.email())
            .orElseThrow(() -> new ApiException("OTP_NOT_FOUND", "No active OTP"));

        if (verification.getExpiresAt().isBefore(Instant.now())) {
            throw new ApiException("OTP_EXPIRED", "OTP expired");
        }
        if (!verification.getCode().equals(request.code())) {
            otpSecurityService.onFailedAttempt(user.getEmail());
            throw new ApiException("OTP_INVALID", "Invalid OTP");
        }

        verification.setUsed(true);
        user.setEmailVerified(true);
        emailVerificationRepository.save(verification);
        userRepository.save(user);
        otpSecurityService.onSuccess(user.getEmail());

        String token = jwtService.generateToken(user.getId().toString(), user.getEmail(), user.getRole().name());
        return new AuthResponse(token, user.getEmail(), true, user.getRole().name(), user.getSubscriptionPlan().name(), user.getPreferredUiLanguage(), "Email verified");
    }

    @Transactional
    public AuthResponse resendOtp(ResendOtpRequest request) {
        User user = userRepository.findByEmailIgnoreCase(request.email())
            .orElseThrow(() -> new ApiException("NOT_FOUND", "User not found"));

        otpSecurityService.ensureNotLocked(user.getEmail());
        String otp = issueOtp(user.getEmail());
        String msg = debugOtp ? "OTP resent. OTP: " + otp : "Verification code resent to your email.";
        return new AuthResponse(null, user.getEmail(), user.isEmailVerified(), user.getRole().name(), user.getSubscriptionPlan().name(), user.getPreferredUiLanguage(), msg);
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmailIgnoreCase(request.email())
            .orElseThrow(() -> new ApiException("INVALID_CREDENTIALS", "Invalid email or password"));

        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new ApiException("INVALID_CREDENTIALS", "Invalid email or password");
        }

        String token = jwtService.generateToken(user.getId().toString(), user.getEmail(), user.getRole().name());
        return new AuthResponse(token, user.getEmail(), user.isEmailVerified(), user.getRole().name(), user.getSubscriptionPlan().name(), user.getPreferredUiLanguage(), "Logged in");
    }

    private String issueOtp(String email) {
        emailVerificationRepository.deleteByExpiresAtBefore(Instant.now());
        String otp = String.format("%06d", new Random().nextInt(1_000_000));
        EmailVerification verification = new EmailVerification();
        verification.setEmail(email.toLowerCase());
        verification.setCode(otp);
        verification.setUsed(false);
        verification.setExpiresAt(Instant.now().plusSeconds((long) otpExpirationMinutes * 60));
        emailVerificationRepository.save(verification);
        otpMailService.sendOtp(email, otp, otpExpirationMinutes);
        return otp;
    }
}

package com.needyou.web.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminBootstrapRunner implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final String adminEmail;
    private final String adminPassword;
    private final String adminFullName;

    public AdminBootstrapRunner(
        UserRepository userRepository,
        PasswordEncoder passwordEncoder,
        @Value("${app.admin.bootstrap-email:}") String adminEmail,
        @Value("${app.admin.bootstrap-password:}") String adminPassword,
        @Value("${app.admin.bootstrap-full-name:NeedYou Admin}") String adminFullName
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
        this.adminFullName = adminFullName;
    }

    @Override
    public void run(String... args) {
        if (adminEmail == null || adminEmail.isBlank() || adminPassword == null || adminPassword.isBlank()) {
            return;
        }

        userRepository.findByEmailIgnoreCase(adminEmail).ifPresentOrElse(existing -> {
            if (existing.getRole() != UserRole.ADMIN) {
                existing.setRole(UserRole.ADMIN);
            }
            existing.setSubscriptionPlan(SubscriptionPlan.BUSINESS);
            existing.setEmailVerified(true);
            userRepository.save(existing);
        }, () -> {
            User admin = new User();
            admin.setEmail(adminEmail.toLowerCase());
            admin.setFullName(adminFullName);
            admin.setPhone("0000000000");
            admin.setPasswordHash(passwordEncoder.encode(adminPassword));
            admin.setEmailVerified(true);
            admin.setRole(UserRole.ADMIN);
            admin.setSubscriptionPlan(SubscriptionPlan.BUSINESS);
            userRepository.save(admin);
        });
    }
}

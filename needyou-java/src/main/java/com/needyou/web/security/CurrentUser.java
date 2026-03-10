package com.needyou.web.security;

import com.needyou.web.auth.User;
import com.needyou.web.auth.UserRepository;
import com.needyou.web.common.ApiException;
import java.util.UUID;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class CurrentUser {
    private final UserRepository userRepository;

    public CurrentUser(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User require() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || auth.getPrincipal() == null) {
            throw new ApiException("UNAUTHORIZED", "Authentication required");
        }
        UUID id = UUID.fromString(auth.getPrincipal().toString());
        return userRepository.findById(id).orElseThrow(() -> new ApiException("UNAUTHORIZED", "User not found"));
    }
}

package com.needyou.web.auth;

import com.needyou.web.common.ApiException;
import com.needyou.web.security.CurrentUser;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountService {

    private final CurrentUser currentUser;
    private final UserRepository userRepository;

    public AccountService(CurrentUser currentUser, UserRepository userRepository) {
        this.currentUser = currentUser;
        this.userRepository = userRepository;
    }

    public AccountResponse me() {
        return map(currentUser.require());
    }

    @Transactional
    public AccountResponse updatePreferences(UpdatePreferencesRequest request) {
        User user = currentUser.require();
        if (request.uiLanguage() != null && !request.uiLanguage().isBlank()) {
            user.setPreferredUiLanguage(request.uiLanguage().toLowerCase());
        }
        if (request.plan() != null) {
            user.setSubscriptionPlan(request.plan());
            if (request.plan() == SubscriptionPlan.BUSINESS) {
                user.setPersonalInfoLocked(false);
            }
            if (request.plan() == SubscriptionPlan.PRO_PERSONAL && !user.isPersonalInfoLocked()) {
                user.setPersonalInfoLocked(true);
            }
        }
        userRepository.save(user);
        return map(user);
    }

    @Transactional
    public AccountResponse updatePersonalInfo(UpdatePersonalInfoRequest request) {
        User user = currentUser.require();
        if (user.getSubscriptionPlan() == SubscriptionPlan.PRO_PERSONAL && user.isPersonalInfoLocked()) {
            throw new ApiException("PERSONAL_INFO_LOCKED", "Personal plan does not allow changing core personal info after lock.");
        }
        user.setFullName(request.fullName());
        user.setPhone(request.phone());
        if (user.getSubscriptionPlan() == SubscriptionPlan.PRO_PERSONAL) {
            user.setPersonalInfoLocked(true);
        }
        userRepository.save(user);
        return map(user);
    }

    private AccountResponse map(User user) {
        return new AccountResponse(
            user.getEmail(),
            user.getFullName(),
            user.getPhone(),
            user.getRole().name(),
            user.getSubscriptionPlan().name(),
            user.isEmailVerified(),
            user.isPersonalInfoLocked(),
            user.getPreferredUiLanguage()
        );
    }
}

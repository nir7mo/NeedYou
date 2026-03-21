package com.needyou.web.auth;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/me")
    public AccountResponse me() {
        return accountService.me();
    }

    @PutMapping("/preferences")
    public AccountResponse preferences(@RequestBody UpdatePreferencesRequest request) {
        return accountService.updatePreferences(request);
    }

    @PutMapping("/personal-info")
    public AccountResponse personalInfo(@Valid @RequestBody UpdatePersonalInfoRequest request) {
        return accountService.updatePersonalInfo(request);
    }
}

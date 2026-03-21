package com.needyou.web.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index() { return "index"; }

    @GetMapping("/pricing")
    public String pricing() { return "index"; }

    @GetMapping("/register")
    public String register() { return "register"; }

    @GetMapping("/login")
    public String login() { return "login"; }

    @GetMapping("/onboarding")
    public String onboarding() { return "onboarding"; }

    @GetMapping("/dashboard")
    public String dashboard() { return "dashboard"; }

    @GetMapping("/job-analyzer")
    public String analyzer() { return "job-analyzer"; }

    @GetMapping("/cv-preview")
    public String preview() { return "cv-preview"; }

    @GetMapping("/results")
    public String results() { return "cv-preview"; }

    @GetMapping("/admin")
    public String admin() { return "admin"; }
}

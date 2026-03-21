package com.needyou.web.cv;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class PublicCvController {

    private final CvService cvService;

    public PublicCvController(CvService cvService) {
        this.cvService = cvService;
    }

    @GetMapping("/p/{publicSlug}")
    public String publicCv(@PathVariable String publicSlug, Model model) {
        var cv = cvService.getByPublicSlug(publicSlug);
        model.addAttribute("slug", cv.getPublicSlug());
        model.addAttribute("content", cv.getContentJson());
        model.addAttribute("language", cv.getLanguage().name());
        return "portfolio-public";
    }
}

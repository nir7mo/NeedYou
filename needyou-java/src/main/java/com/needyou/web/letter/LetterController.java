package com.needyou.web.letter;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/letters")
public class LetterController {

    private final LetterService letterService;

    public LetterController(LetterService letterService) {
        this.letterService = letterService;
    }

    @PostMapping("/generate")
    public GenerateLetterResponse generate(@Valid @RequestBody GenerateLetterRequest request) {
        return letterService.generate(request);
    }
}

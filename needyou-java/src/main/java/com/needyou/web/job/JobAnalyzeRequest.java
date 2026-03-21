package com.needyou.web.job;

import com.needyou.web.common.LanguageCode;
import jakarta.validation.constraints.NotBlank;

public record JobAnalyzeRequest(
    String jobUrl,
    @NotBlank String jobDescription,
    LanguageCode outputLanguage
) {}

package com.needyou.web.letter;

import com.needyou.web.common.LanguageCode;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public record GenerateLetterRequest(
    @NotNull UUID analysisId,
    @NotNull LanguageCode language
) {}

package com.needyou.web.cv;

import com.needyou.web.common.LanguageCode;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public record ScoreRequest(
    @NotNull UUID analysisId,
    @NotNull UUID cvId,
    LanguageCode outputLanguage
) {}

package com.needyou.web.cv;

import com.needyou.web.common.LanguageCode;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public record GenerateCvRequest(
    @NotNull UUID analysisId,
    @NotNull LanguageCode language
) {}

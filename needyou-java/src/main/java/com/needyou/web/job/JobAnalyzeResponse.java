package com.needyou.web.job;

import java.util.List;
import java.util.UUID;

public record JobAnalyzeResponse(
    UUID analysisId,
    List<String> keywords,
    List<String> requirements,
    String rawJson
) {}

package com.needyou.web.cv;

import java.util.List;
import java.util.UUID;

public record ScoreResponse(
    UUID scoreId,
    int score,
    List<String> gaps,
    List<String> recommendations,
    String rawJson
) {}

package com.needyou.web.letter;

import java.util.UUID;

public record GenerateLetterResponse(
    UUID id,
    String content
) {}

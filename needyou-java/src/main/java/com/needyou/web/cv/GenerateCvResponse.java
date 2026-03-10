package com.needyou.web.cv;

import java.util.UUID;

public record GenerateCvResponse(
    UUID cvId,
    String publicSlug,
    String contentJson
) {}

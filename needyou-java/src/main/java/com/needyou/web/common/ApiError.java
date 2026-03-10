package com.needyou.web.common;

import java.time.Instant;

public record ApiError(
    String code,
    String message,
    Instant timestamp
) {}

package com.needyou.web.storage;

import java.util.UUID;

public record UploadResponse(UUID id, String fileName, String contentType, String extractedText) {}

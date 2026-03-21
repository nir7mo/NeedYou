package com.needyou.web.storage;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/profile/attachments")
public class StorageController {

    private final StorageService storageService;

    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    @PostMapping
    public UploadResponse upload(@RequestParam("file") MultipartFile file) {
        UploadedDocument doc = storageService.upload(file);
        return new UploadResponse(doc.getId(), doc.getOriginalName(), doc.getContentType(), doc.getExtractedText());
    }
}

package com.needyou.web.storage;

import com.needyou.web.auth.User;
import com.needyou.web.common.ApiException;
import com.needyou.web.security.CurrentUser;
import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageService {

    private final Path basePath;
    private final UploadedDocumentRepository repository;
    private final CurrentUser currentUser;

    public StorageService(@Value("${app.storage.path}") String storagePath, UploadedDocumentRepository repository, CurrentUser currentUser) throws IOException {
        this.basePath = Paths.get(storagePath).toAbsolutePath().normalize();
        Files.createDirectories(this.basePath);
        this.repository = repository;
        this.currentUser = currentUser;
    }

    public UploadedDocument upload(MultipartFile file) {
        User user = currentUser.require();
        String original = file.getOriginalFilename() == null ? "document" : file.getOriginalFilename();
        String lower = original.toLowerCase();
        if (!(lower.endsWith(".pdf") || lower.endsWith(".docx") || lower.endsWith(".txt"))) {
            throw new ApiException("UNSUPPORTED_FILE", "Only PDF, DOCX, TXT are allowed");
        }

        String name = user.getId() + "_" + UUID.randomUUID() + "_" + original.replaceAll("[^a-zA-Z0-9._-]", "_");
        Path target = basePath.resolve(name);

        try {
            file.transferTo(target);
        } catch (IOException e) {
            throw new ApiException("UPLOAD_FAILED", "File upload failed");
        }

        UploadedDocument doc = new UploadedDocument();
        doc.setUser(user);
        doc.setOriginalName(original);
        doc.setContentType(file.getContentType() == null ? "application/octet-stream" : file.getContentType());
        doc.setStoragePath(target.toString());
        doc.setExtractedText("Extraction pending for " + original);
        return repository.save(doc);
    }
}

package com.needyou.web.cv;

import jakarta.validation.Valid;
import java.util.Map;
import java.util.UUID;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cv")
public class CvController {

    private final CvService cvService;
    private final PdfService pdfService;

    public CvController(CvService cvService, PdfService pdfService) {
        this.cvService = cvService;
        this.pdfService = pdfService;
    }

    @PostMapping("/generate")
    public GenerateCvResponse generate(@Valid @RequestBody GenerateCvRequest request) {
        return cvService.generate(request);
    }

    @PostMapping("/score")
    public ScoreResponse score(@Valid @RequestBody ScoreRequest request) {
        return cvService.score(request);
    }

    @GetMapping("/{id}/pdf")
    public ResponseEntity<byte[]> pdf(@PathVariable UUID id) {
        GeneratedCv cv = cvService.requireOwnedCv(id);
        byte[] bytes = pdfService.buildCvPdf(cv);
        return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_PDF)
            .header(HttpHeaders.CONTENT_DISPOSITION, ContentDisposition.attachment().filename("NeedYou-CV.pdf").build().toString())
            .body(bytes);
    }

    @GetMapping("/{id}")
    public Map<String, Object> getCv(@PathVariable UUID id) {
        GeneratedCv cv = cvService.requireOwnedCv(id);
        return Map.of("id", cv.getId(), "publicSlug", cv.getPublicSlug(), "contentJson", cv.getContentJson(), "language", cv.getLanguage().name());
    }
}

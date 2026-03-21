package com.needyou.web.outreach;

import com.needyou.web.common.ApiException;
import com.needyou.web.cv.GeneratedCv;
import com.needyou.web.cv.GeneratedCvRepository;
import com.needyou.web.cv.PdfService;
import com.needyou.web.letter.GeneratedLetter;
import com.needyou.web.letter.GeneratedLetterRepository;
import com.needyou.web.security.CurrentUser;
import com.needyou.web.storage.UploadedDocument;
import com.needyou.web.storage.UploadedDocumentRepository;
import jakarta.mail.internet.MimeMessage;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class OutreachService {

    private final CurrentUser currentUser;
    private final JavaMailSender mailSender;
    private final GeneratedCvRepository generatedCvRepository;
    private final GeneratedLetterRepository generatedLetterRepository;
    private final UploadedDocumentRepository uploadedDocumentRepository;
    private final PdfService pdfService;

    public OutreachService(
        CurrentUser currentUser,
        JavaMailSender mailSender,
        GeneratedCvRepository generatedCvRepository,
        GeneratedLetterRepository generatedLetterRepository,
        UploadedDocumentRepository uploadedDocumentRepository,
        PdfService pdfService
    ) {
        this.currentUser = currentUser;
        this.mailSender = mailSender;
        this.generatedCvRepository = generatedCvRepository;
        this.generatedLetterRepository = generatedLetterRepository;
        this.uploadedDocumentRepository = uploadedDocumentRepository;
        this.pdfService = pdfService;
    }

    public OutreachPreviewResponse preview(OutreachRequest request) {
        String body = "Company: " + request.companyName() + "\n\n" + request.message();
        return new OutreachPreviewResponse(request.subject(), body);
    }

    public OutreachResponse send(OutreachRequest request) {
        var user = currentUser.require();
        try {
            MimeMessage mime = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mime, true, "UTF-8");
            helper.setTo(request.recipientEmail());
            helper.setSubject(request.subject());
            helper.setText("Company: " + request.companyName() + "\n\n" + request.message(), false);

            if (request.attachCv() && request.generatedCvId() != null) {
                GeneratedCv cv = generatedCvRepository.findById(request.generatedCvId())
                    .orElseThrow(() -> new ApiException("CV_NOT_FOUND", "CV not found"));
                if (!cv.getUser().getId().equals(user.getId())) {
                    throw new ApiException("FORBIDDEN", "Not allowed CV attachment");
                }
                byte[] pdf = pdfService.buildCvPdf(cv);
                helper.addAttachment("NeedYou-CV.pdf", new ByteArrayResource(pdf));
            }

            if (request.attachLetter() && request.generatedLetterId() != null) {
                GeneratedLetter letter = generatedLetterRepository.findById(request.generatedLetterId())
                    .orElseThrow(() -> new ApiException("LETTER_NOT_FOUND", "Letter not found"));
                if (!letter.getUser().getId().equals(user.getId())) {
                    throw new ApiException("FORBIDDEN", "Not allowed letter attachment");
                }
                helper.addAttachment("NeedYou-Letter.txt", new ByteArrayResource(letter.getContent().getBytes()));
            }

            for (UUID docId : safe(request.uploadedDocumentIds())) {
                UploadedDocument doc = uploadedDocumentRepository.findById(docId)
                    .orElseThrow(() -> new ApiException("DOC_NOT_FOUND", "Document not found"));
                if (!doc.getUser().getId().equals(user.getId())) {
                    throw new ApiException("FORBIDDEN", "Not allowed document attachment");
                }
                byte[] bytes = Files.readAllBytes(Path.of(doc.getStoragePath()));
                helper.addAttachment(doc.getOriginalName(), new ByteArrayResource(bytes));
            }

            mailSender.send(mime);
            return new OutreachResponse(true, "Email sent successfully.");
        } catch (Exception e) {
            return new OutreachResponse(false, "Email sending failed: " + e.getMessage());
        }
    }

    private <T> List<T> safe(List<T> values) {
        return values == null ? Collections.emptyList() : values;
    }
}

package com.needyou.web.outreach;

import com.needyou.web.common.LanguageCode;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import java.util.UUID;

public record OutreachRequest(
    @NotBlank String companyName,
    @Email @NotBlank String recipientEmail,
    @NotBlank String subject,
    @NotBlank String message,
    LanguageCode language,
    UUID generatedCvId,
    UUID generatedLetterId,
    List<UUID> uploadedDocumentIds,
    boolean attachCv,
    boolean attachLetter
) {}

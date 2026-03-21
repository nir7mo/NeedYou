package com.needyou.web.cv;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] buildCvPdf(GeneratedCv cv) {
        try (PDDocument document = new PDDocument(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            PDPage page = new PDPage();
            document.addPage(page);
            PDPageContentStream content = new PDPageContentStream(document, page);
            content.beginText();
            content.setFont(PDType1Font.HELVETICA_BOLD, 14);
            content.newLineAtOffset(50, 750);
            content.showText("NeedYou CV Export");
            content.newLineAtOffset(0, -20);
            content.setFont(PDType1Font.HELVETICA, 10);
            String safe = cv.getContentJson().replaceAll("\\s+", " ");
            if (safe.length() > 900) {
                safe = safe.substring(0, 900) + " ...";
            }
            content.showText(safe);
            content.endText();
            content.close();
            document.save(out);
            return out.toByteArray();
        } catch (IOException e) {
            throw new RuntimeException("PDF generation failed", e);
        }
    }
}

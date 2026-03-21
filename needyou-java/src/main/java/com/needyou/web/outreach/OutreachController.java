package com.needyou.web.outreach;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/outreach")
public class OutreachController {

    private final OutreachService outreachService;

    public OutreachController(OutreachService outreachService) {
        this.outreachService = outreachService;
    }

    @PostMapping("/preview")
    public OutreachPreviewResponse preview(@Valid @RequestBody OutreachRequest request) {
        return outreachService.preview(request);
    }

    @PostMapping("/send")
    public OutreachResponse send(@Valid @RequestBody OutreachRequest request) {
        return outreachService.send(request);
    }
}

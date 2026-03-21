package com.needyou.web.job;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/analyze")
    public JobAnalyzeResponse analyze(@Valid @RequestBody JobAnalyzeRequest request) {
        return jobService.analyze(request);
    }
}

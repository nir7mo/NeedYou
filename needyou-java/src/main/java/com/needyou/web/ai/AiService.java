package com.needyou.web.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AiService {

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    private final String apiKey;
    private final String model;
    private final String apiUrl;
    private final int maxRetries;

    public AiService(
        RestTemplate restTemplate,
        ObjectMapper objectMapper,
        @Value("${app.ai.openai-api-key}") String apiKey,
        @Value("${app.ai.openai-model}") String model,
        @Value("${app.ai.openai-url}") String apiUrl,
        @Value("${app.ai.max-retries}") int maxRetries
    ) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
        this.apiKey = apiKey;
        this.model = model;
        this.apiUrl = apiUrl;
        this.maxRetries = maxRetries;
    }

    public String parseJob(String jobDescription, String language) {
        return callOrFallback(
            AiPrompts.jobParsingSystem(language),
            AiPrompts.jobParsingUser(jobDescription, language),
            "{\"keywords\":[\"communication\",\"teamwork\"],\"requirements\":[\"relevant experience\"],\"seniority\":\"junior\",\"job_title\":\"unknown\"}"
        );
    }

    public String generateCvJson(String profileJson, String jobJson, String language) {
        return callOrFallback(
            AiPrompts.cvSystem(language),
            AiPrompts.cvUser(profileJson, jobJson, language),
            "{\"full_name\":\"Candidate\",\"title\":\"Professional\",\"summary\":\"Tailored profile\",\"skills\":[\"Communication\",\"Problem Solving\"],\"experience\":[{\"role\":\"Role\",\"company\":\"Company\",\"impact\":\"Improved KPI\"}],\"education\":[{\"degree\":\"Degree\",\"school\":\"School\"}],\"keywords_used\":[\"teamwork\"],\"language\":\""
                + language + "\"}"
        );
    }

    public String generateCoverLetter(String profileJson, String jobJson, String language) {
        return callOrFallback(
            AiPrompts.letterSystem(language),
            AiPrompts.letterUser(profileJson, jobJson, language),
            switch (language) {
                case "FR" -> "Madame, Monsieur, je vous presente ma candidature pour ce poste.";
                case "EN" -> "Dear Hiring Manager, I am excited to apply for this role.";
                default -> "السادة الكرام، أتقدم إلى منصبكم باهتمام كبير.";
            }
        );
    }

    public String scoreCv(String cvJson, String jobJson, String language) {
        return callOrFallback(
            AiPrompts.scoreSystem(language),
            AiPrompts.scoreUser(cvJson, jobJson, language),
            "{\"score\":72,\"gaps\":[\"Add domain keywords\"],\"recommendations\":[\"Highlight measurable impact\"],\"missing_keywords\":[\"leadership\"]}"
        );
    }

    private String callOrFallback(String systemPrompt, String userPrompt, String fallback) {
        if (apiKey == null || apiKey.isBlank()) {
            return fallback;
        }
        for (int i = 0; i <= maxRetries; i++) {
            try {
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.setBearerAuth(apiKey);

                Map<String, Object> body = Map.of(
                    "model", model,
                    "messages", List.of(
                        Map.of("role", "system", "content", systemPrompt),
                        Map.of("role", "user", "content", userPrompt)
                    ),
                    "temperature", 0.2
                );

                HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
                ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, request, String.class);
                JsonNode root = objectMapper.readTree(response.getBody());
                JsonNode content = root.path("choices").path(0).path("message").path("content");
                if (!content.isMissingNode()) {
                    return sanitize(content.asText(), fallback);
                }
            } catch (Exception ignored) {
            }
        }
        return fallback;
    }

    private String sanitize(String content, String fallback) {
        String text = content.trim();
        if (text.startsWith("```") && text.endsWith("```")) {
            text = text.replaceFirst("^```(?:json)?", "").replaceFirst("```$", "").trim();
        }
        if (text.isBlank()) {
            return fallback;
        }
        return text;
    }
}

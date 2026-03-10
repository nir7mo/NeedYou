package com.needyou.web;

import static org.assertj.core.api.Assertions.assertThat;

import com.needyou.web.ai.AiService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AiServiceTest {

    @Autowired
    private AiService aiService;

    @Test
    void shouldReturnFallbackScoreJsonShape() {
        String raw = aiService.scoreCv("{}", "{}");
        assertThat(raw).contains("score");
    }
}

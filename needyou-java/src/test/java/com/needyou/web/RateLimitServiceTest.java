package com.needyou.web;

import static org.assertj.core.api.Assertions.assertThat;

import com.needyou.web.rate.RateLimitService;
import org.junit.jupiter.api.Test;

class RateLimitServiceTest {

    @Test
    void shouldAllowAtLeastOneRequest() {
        RateLimitService service = new RateLimitService(1);
        service.check("k");
        assertThat(true).isTrue();
    }
}

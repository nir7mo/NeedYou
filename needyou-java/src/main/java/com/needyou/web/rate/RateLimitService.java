package com.needyou.web.rate;

import com.needyou.web.common.ApiException;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RateLimitService {

    private final int limitPerMinute;
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    public RateLimitService(@Value("${app.rate-limit.per-minute}") int limitPerMinute) {
        this.limitPerMinute = limitPerMinute;
    }

    public void check(String key) {
        long nowMinute = Instant.now().getEpochSecond() / 60;
        Bucket bucket = buckets.computeIfAbsent(key, k -> new Bucket(nowMinute));
        synchronized (bucket) {
            if (bucket.minute != nowMinute) {
                bucket.minute = nowMinute;
                bucket.count.set(0);
            }
            if (bucket.count.incrementAndGet() > limitPerMinute) {
                throw new ApiException("RATE_LIMIT", "Too many requests, please wait a minute");
            }
        }
    }

    private static final class Bucket {
        long minute;
        AtomicInteger count = new AtomicInteger(0);
        Bucket(long minute) { this.minute = minute; }
    }
}

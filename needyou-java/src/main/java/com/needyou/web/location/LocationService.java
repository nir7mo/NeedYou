package com.needyou.web.location;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    private final ObjectMapper objectMapper;
    private List<CountryDto> countries = new ArrayList<>();

    public LocationService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @PostConstruct
    public void init() {
        try (InputStream is = getClass().getClassLoader().getResourceAsStream("data/locations.json")) {
            if (is == null) return;
            JsonNode root = objectMapper.readTree(is).path("countries");
            List<CountryDto> loaded = new ArrayList<>();
            for (JsonNode c : root) {
                List<StateDto> states = new ArrayList<>();
                for (JsonNode s : c.path("states")) {
                    List<String> cities = new ArrayList<>();
                    s.path("cities").forEach(city -> cities.add(city.asText()));
                    states.add(new StateDto(
                        s.path("code").asText(),
                        s.path("name_ar").asText(),
                        s.path("name_en").asText(),
                        s.path("name_fr").asText(),
                        cities
                    ));
                }
                loaded.add(new CountryDto(
                    c.path("code").asText(),
                    c.path("name_ar").asText(),
                    c.path("name_en").asText(),
                    c.path("name_fr").asText(),
                    states
                ));
            }
            countries = loaded;
        } catch (Exception ignored) {
        }
    }

    public List<CountryDto> countries() { return countries; }
}

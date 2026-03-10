package com.needyou.web.business;

import jakarta.validation.Valid;
import java.util.List;
import java.util.UUID;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/business/profiles")
public class ManagedProfileController {

    private final ManagedProfileService service;

    public ManagedProfileController(ManagedProfileService service) {
        this.service = service;
    }

    @GetMapping
    public List<ManagedProfileResponse> list() {
        return service.list();
    }

    @PostMapping
    public ManagedProfileResponse create(@Valid @RequestBody ManagedProfileRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public ManagedProfileResponse update(@PathVariable UUID id, @Valid @RequestBody ManagedProfileRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}

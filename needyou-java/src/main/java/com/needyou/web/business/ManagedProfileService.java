package com.needyou.web.business;

import com.needyou.web.auth.SubscriptionPlan;
import com.needyou.web.common.ApiException;
import com.needyou.web.security.CurrentUser;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ManagedProfileService {

    private final CurrentUser currentUser;
    private final ManagedProfileRepository repository;

    public ManagedProfileService(CurrentUser currentUser, ManagedProfileRepository repository) {
        this.currentUser = currentUser;
        this.repository = repository;
    }

    public List<ManagedProfileResponse> list() {
        var user = currentUser.require();
        ensureBusiness(user.getSubscriptionPlan());
        return repository.findByOwnerIdOrderByCreatedAtDesc(user.getId()).stream().map(this::map).toList();
    }

    @Transactional
    public ManagedProfileResponse create(ManagedProfileRequest request) {
        var user = currentUser.require();
        ensureBusiness(user.getSubscriptionPlan());
        ManagedProfile p = new ManagedProfile();
        p.setOwner(user);
        apply(p, request);
        return map(repository.save(p));
    }

    @Transactional
    public ManagedProfileResponse update(UUID id, ManagedProfileRequest request) {
        var user = currentUser.require();
        ensureBusiness(user.getSubscriptionPlan());
        ManagedProfile p = repository.findById(id).orElseThrow(() -> new ApiException("MANAGED_PROFILE_NOT_FOUND", "Managed profile not found"));
        if (!p.getOwner().getId().equals(user.getId())) throw new ApiException("FORBIDDEN", "Not allowed");
        apply(p, request);
        return map(repository.save(p));
    }

    @Transactional
    public void delete(UUID id) {
        var user = currentUser.require();
        ensureBusiness(user.getSubscriptionPlan());
        ManagedProfile p = repository.findById(id).orElseThrow(() -> new ApiException("MANAGED_PROFILE_NOT_FOUND", "Managed profile not found"));
        if (!p.getOwner().getId().equals(user.getId())) throw new ApiException("FORBIDDEN", "Not allowed");
        repository.delete(p);
    }

    private void apply(ManagedProfile p, ManagedProfileRequest r) {
        p.setFullName(r.fullName());
        p.setPhone(r.phone());
        p.setHeadline(r.headline());
        p.setSummary(r.summary());
        p.setCountryCode(r.countryCode());
        p.setStateCode(r.stateCode());
        p.setCity(r.city());
    }

    private ManagedProfileResponse map(ManagedProfile p) {
        return new ManagedProfileResponse(p.getId(), p.getFullName(), p.getPhone(), p.getHeadline(), p.getSummary(), p.getCountryCode(), p.getStateCode(), p.getCity());
    }

    private void ensureBusiness(SubscriptionPlan plan) {
        if (plan != SubscriptionPlan.BUSINESS) {
            throw new ApiException("BUSINESS_PLAN_REQUIRED", "Business plan required for managing multiple client profiles.");
        }
    }
}

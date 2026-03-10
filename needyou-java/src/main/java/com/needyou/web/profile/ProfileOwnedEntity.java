package com.needyou.web.profile;

import jakarta.persistence.*;
import java.util.UUID;

@MappedSuperclass
public abstract class ProfileOwnedEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "profile_id")
    private Profile profile;

    public UUID getId() { return id; }
    public Profile getProfile() { return profile; }
    public void setProfile(Profile profile) { this.profile = profile; }
}

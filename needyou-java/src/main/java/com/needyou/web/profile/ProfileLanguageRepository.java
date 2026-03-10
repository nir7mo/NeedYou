package com.needyou.web.profile;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileLanguageRepository extends JpaRepository<ProfileLanguage, UUID> {
    List<ProfileLanguage> findByProfileId(UUID profileId);
    void deleteByProfileId(UUID profileId);
}

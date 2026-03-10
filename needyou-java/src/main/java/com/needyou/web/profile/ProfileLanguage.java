package com.needyou.web.profile;

import com.needyou.web.common.LanguageCode;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;

@Entity
@Table(name = "languages")
public class ProfileLanguage extends ProfileOwnedEntity {
    @Enumerated(EnumType.STRING)
    private LanguageCode code;
    private String level;

    public LanguageCode getCode() { return code; }
    public void setCode(LanguageCode code) { this.code = code; }
    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}

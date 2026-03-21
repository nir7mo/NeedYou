package com.needyou.web.profile;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tools")
public class Tool extends ProfileOwnedEntity {
    private String name;
    private String level;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}

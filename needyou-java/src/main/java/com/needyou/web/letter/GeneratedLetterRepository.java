package com.needyou.web.letter;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GeneratedLetterRepository extends JpaRepository<GeneratedLetter, UUID> {
    List<GeneratedLetter> findByUserIdOrderByCreatedAtDesc(UUID userId);
}

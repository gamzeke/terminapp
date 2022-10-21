package de.terminapp.terminapp.features.faq;

import de.terminapp.terminapp.features.faq.models.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FAQRepository extends JpaRepository<FAQ, Long> {
}
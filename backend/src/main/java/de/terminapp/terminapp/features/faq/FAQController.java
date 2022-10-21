package de.terminapp.terminapp.features.faq;

import de.terminapp.terminapp.features.faq.models.FAQ;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/faqs")
public class FAQController {
    private final FAQService fAQService;

    @GetMapping
    ResponseEntity<List<FAQ>> getAllFAQs() {
        log.info("Request for all FAQS");
        List<FAQ> result = fAQService.getAllFAQs();
        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    ResponseEntity<FAQ> createFAQ(@Validated @RequestBody FAQ faq) {
        log.info("Request to create a faq: {}", faq);
        FAQ result = fAQService.createFAQ(faq);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("{id}")
    ResponseEntity<?> deleteFAQ(@PathVariable Long id) {
        log.info("Request to delete faq: {}", id);
        fAQService.deleteFAQ(id);
        return ResponseEntity.ok().build();
    }
}

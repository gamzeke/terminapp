package de.terminapp.terminapp.features.faq;

import de.terminapp.terminapp.features.faq.models.FAQ;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/faqs")
public class FAQController {
    private final FAQService fAQService;

    @GetMapping
    public List<FAQ> getAllFAQs() {
        log.info("Gets all FAQs");
        return fAQService.getAllFAQs();
    }
}

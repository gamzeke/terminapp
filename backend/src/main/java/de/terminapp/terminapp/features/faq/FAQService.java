package de.terminapp.terminapp.features.faq;

import de.terminapp.terminapp.features.faq.models.FAQ;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FAQService {
    private final FAQRepository fAQRepository;

    public List<FAQ> getAllFAQs() {
        return fAQRepository.findAll();
    }

    public FAQ createFAQ(FAQ faq) {
        return fAQRepository.save(faq);
    }

    public void deleteFAQ(Long id) {
        fAQRepository.deleteById(id);
    }
}

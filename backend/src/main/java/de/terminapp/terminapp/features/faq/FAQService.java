package de.terminapp.terminapp.features.faq;

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
}

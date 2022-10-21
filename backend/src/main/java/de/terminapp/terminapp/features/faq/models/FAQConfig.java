package de.terminapp.terminapp.features.faq.models;

import de.terminapp.terminapp.features.faq.FAQRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class FAQConfig {
    @Bean
    CommandLineRunner FAQCommandLineRunner(FAQRepository fAQRepository) {
        return args -> {
            fAQRepository.saveAll(List.of(
                    FAQ.builder()
                            .question("Das ist eine Testfrage")
                            .answer("Das ist eine Testantwort")
                            .build()
            ));
        };
    }
}
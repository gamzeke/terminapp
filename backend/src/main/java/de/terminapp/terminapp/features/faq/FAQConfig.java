package de.terminapp.terminapp.features.faq;

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
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build(),
                    FAQ.builder()
                            .title("Test Title")
                            .content("Test Content")
                            .build()
            ));
        };
    }
}
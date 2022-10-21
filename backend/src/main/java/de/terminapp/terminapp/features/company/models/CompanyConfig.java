package de.terminapp.terminapp.features.company.models;

import de.terminapp.terminapp.features.company.CompanyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CompanyConfig {
    @Bean
    CommandLineRunner CompanyCommandLineRunner(CompanyRepository companyRepository) {
        return args -> {
            companyRepository.save(
                    Company
                            .builder()
                            .companyName("Mustermann AG")
                            .welcomeText("Das ist ein Mustertext für die Willkommensseite.")
                            .street("Musterstraße 1")
                            .additionalInformation("Hinterhaus")
                            .postCode("12345")
                            .city("Musterstadt")
                            .state("Musterland")
                            .homepageLink("https://www.muster-seite.de")
                            .facebookLink("https://www.muster-seite.de")
                            .instagramLink("https://www.muster-seite.de")
                            .youtubeLink("https://www.muster-seite.de")
                            .tikTokLink("https://www.muster-seite.de")
                            .build()
            );
        };
    }
}
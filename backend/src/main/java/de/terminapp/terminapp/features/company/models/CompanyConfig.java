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
                            .welcomeText("Ihre Startseite zählt zu den wichtigsten Seiten Ihres Webauftritts. Und wenn Sie einmal genauer in Ihre Webstatistik schauen. Ihre Startseite ist wahrscheinlich auch die meistbesuchte.")
                            .street("Musterstraße 1")
                            .additionalInformation("Hinterhaus")
                            .postCode("12345")
                            .city("Musterstadt")
                            .state("Musterland")
                            .homepageLink("https://www.muster-seite.de")
                            .facebookLink("https://www.facebook.de")
                            .instagramLink("https://www.instagram.de")
                            .youtubeLink("https://www.youtube.de")
                            .tikTokLink("https://www.tiktok.de")
                            .build()
            );
        };
    }
}
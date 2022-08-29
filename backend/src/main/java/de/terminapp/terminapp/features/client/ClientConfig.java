package de.terminapp.terminapp.features.client;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class ClientConfig {
    @Bean
    CommandLineRunner commandLineRunner(ClientRepository clientRepository) {
        return args -> {

            Client c1 = Client.builder()
                    .firstName("Super")
                    .lastName("Man")
                    .telephone("0123456789")
                    .birthday(LocalDate.of(1900, Month.NOVEMBER, 20))
                    .email("super.heros@hero.com")
                    .firstContactDate(LocalDate.of(2020, Month.FEBRUARY, 21))
                    .streetName("Musterstraße")
                    .streetNumber("1")
                    .postCode("12345")
                    .city("Musterstadt")
                    .state("MusterLand")
                    .country("Deutschland")
                    .build();

            Client c2 = Client.builder()
                    .firstName("Bat")
                    .lastName("Man")
                    .telephone("0123456789")
                    .birthday(LocalDate.of(1900, Month.NOVEMBER, 20))
                    .email("super.heros@hero.com")
                    .firstContactDate(LocalDate.of(2020, Month.FEBRUARY, 21))
                    .streetName("Musterstraße")
                    .streetNumber("3")
                    .postCode("12345")
                    .city("Musterstadt")
                    .state("MusterLand")
                    .country("Deutschland")
                    .build();

            Client c3 = Client.builder()
                    .firstName("Spider")
                    .lastName("Man")
                    .telephone("0123456789")
                    .birthday(LocalDate.of(1900, Month.NOVEMBER, 20))
                    .email("super.heros@hero.com")
                    .firstContactDate(LocalDate.of(2020, Month.FEBRUARY, 21))
                    .streetName("Musterstraße")
                    .streetNumber("3")
                    .postCode("12345")
                    .city("Musterstadt")
                    .state("MusterLand")
                    .country("Deutschland")
                    .build();

            Client c4 = Client.builder()
                    .firstName("Iron")
                    .lastName("Man")
                    .telephone("0123456789")
                    .birthday(LocalDate.of(1900, Month.NOVEMBER, 20))
                    .email("super.heros@hero.com")
                    .firstContactDate(LocalDate.of(2020, Month.FEBRUARY, 21))
                    .streetName("Musterstraße")
                    .streetNumber("4")
                    .postCode("12345")
                    .city("Musterstadt")
                    .state("MusterLand")
                    .country("Deutschland")
                    .build();

            clientRepository.saveAll(List.of(c1, c2, c3, c4));
        };
    }
}
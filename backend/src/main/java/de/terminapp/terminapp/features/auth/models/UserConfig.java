package de.terminapp.terminapp.features.auth.models;

import de.terminapp.terminapp.features.auth.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

@Slf4j
@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner UserCommandLineRunner(UserRepository userRepository) {
        return args -> {
            boolean isEmpty = userRepository.findAll().isEmpty();
            if (isEmpty) {
                log.info("Generate super user credentials");
                userRepository.save(
                        User
                                .builder()
                                .username("TerminAppSuperUser01")
                                .password(UUID.randomUUID().toString())
                                .build()
                );
                userRepository.save(
                        User
                                .builder()
                                .username("TerminAppSuperUser02")
                                .password(UUID.randomUUID().toString())
                                .build()
                );
                userRepository.save(
                        User
                                .builder()
                                .username("TerminAppSuperUser03")
                                .password(UUID.randomUUID().toString())
                                .build()
                );
                System.out.println("###################################### SUPERUSER ######################################");
                userRepository.findAll().forEach(user -> System.out.println("Superuser: " + user.getUsername() + " with password " + user.getPassword()));
                System.out.println("###################################### SUPERUSER ######################################");
            } else {
                log.info("Skip super user credentials generation");
            }
        };
    }
}
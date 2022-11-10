package de.terminapp.terminapp.features.auth;

import de.terminapp.terminapp.features.auth.models.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/users")
public class UserController {
    private final UserService userService;

    @PostMapping
    ResponseEntity<User> login(@Validated @RequestBody User user) {
        log.info("Request to login: {}", user);
        Optional<User> result = userService.login(user);
        if (result.isPresent()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

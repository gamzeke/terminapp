package de.terminapp.terminapp.features.auth;

import de.terminapp.terminapp.features.auth.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
package de.terminapp.terminapp.features.client;

import de.terminapp.terminapp.features.client.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
package de.terminapp.terminapp.features.client;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/clients")
public class ClientController {
    private final ClientService clientService;

    @GetMapping
    public List<Client> getAllClients() {
        log.info("Gets all clients");
        return clientService.getAllClients();
    }
}

package de.terminapp.terminapp.features.company;

import de.terminapp.terminapp.features.company.models.Company;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/company")
public class CompanyController {
    private final CompanyService companyService;

    @GetMapping("{id}")
    ResponseEntity<?> getCompany(@PathVariable Long id) {
        log.info("Request for company with ID: {}", id);
        Optional<Company> result = companyService.getCompany(id);
        return result.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    ResponseEntity<Company> updateCompany(@RequestBody Company companyProfile) {
        log.info("Request to update company: {}", companyProfile);
        Company result = companyService.updateCompany(companyProfile);
        return ResponseEntity
                .ok()
                .body(result);
    }
}

package de.terminapp.terminapp.features.company;

import de.terminapp.terminapp.features.company.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
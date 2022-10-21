package de.terminapp.terminapp.features.company;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyService {
    private final CompanyRepository companyRepository;

    public Optional<Company> getCompany(Long id) {
        return companyRepository.findById(id);
    }

    public Company updateCompany(Company companyProfile) {
        return companyRepository.save(companyProfile);
    }
}

package de.terminapp.terminapp.features.businessProfile;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BusinessProfileService {
    private final BusinessProfileRepository businessProfileRepository;

    public List<BusinessProfile> getBusinessProfile() {
        return businessProfileRepository.findAll();
    }
}

package de.terminapp.terminapp.features.businessProfile;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/businessProfile")
public class BusinessProfileController {
    private final BusinessProfileService businessProfileService;

    @GetMapping
    public List<BusinessProfile> getBusinessProfile() {
        log.info("Get the profile");
        return businessProfileService.getBusinessProfile();
    }
}

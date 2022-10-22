package de.terminapp.terminapp.features.company.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "company")
public class Company {
    @Id
    @SequenceGenerator(
            name = "appointment_sequence",
            sequenceName = "company_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "company_sequence"
    )
    private Long id;

    private String companyName;
    private String welcomeText;

    private String street;
    private String additionalInformation;
    private String postCode;
    private String city;
    private String state;
    private String email;
    private String phone;
    private String homepageLink;
    private String instagramLink;
    private String facebookLink;
    private String tikTokLink;
    private String youtubeLink;
}

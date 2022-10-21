package de.terminapp.terminapp.features.company;

import de.terminapp.terminapp.features.product.Product;
import lombok.*;

import javax.persistence.*;
import java.util.List;

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

    private String homepageLink;
    private String instagramLink;
    private String facebookLink;
    private String tikTokLink;
    private String youtubeLink;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<BusinessHours> businessHours;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<Product> products;
}

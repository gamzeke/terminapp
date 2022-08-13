package de.terminapp.terminapp.features.businessProfile;

import de.terminapp.terminapp.features.product.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "business_profile")
public class BusinessProfile {
    @Id
    @SequenceGenerator(
            name = "appointment_sequence",
            sequenceName = "appointment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "appointment_sequence"
    )
    private Long id;

    private String nameOfBusiness;
    private String slogan;
    private String additionalInformation;

    private String streetName;
    private String streetNumber;
    private String postCode;
    private String city;
    private String state;
    private String country;

    private String homepageLink;
    private String instagramLink;
    private String facebookLink;
    private String tiktokLink;
    private String youtubeLink;

    @OneToMany(mappedBy = "businessProfile", cascade = CascadeType.ALL)
    private List<BusinessHours> businessHours;

    @OneToMany(mappedBy = "businessProfile", cascade = CascadeType.ALL)
    private List<Product> products;
}

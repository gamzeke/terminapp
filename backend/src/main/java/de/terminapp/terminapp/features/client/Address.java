package de.terminapp.terminapp.features.client;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "addresses")
public class Address {
    @Id
    @SequenceGenerator(
            name = "address_sequence",
            sequenceName = "address_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "address_sequence"
    )
    private Long id;

    private String streetName;
    private String streetNumber;
    private String postCode;
    private String city;
    private String state;
    private String country;

    @OneToOne(mappedBy = "address")
    private Client client;
}

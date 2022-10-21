package de.terminapp.terminapp.features.client.models;

import de.terminapp.terminapp.features.appointments.models.Appointment;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clients")
@Builder
public class Client {
    @Id
    @SequenceGenerator(
            name = "client_sequence",
            sequenceName = "client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_sequence"
    )
    private long id;

    private String firstName;
    private String lastName;
    private LocalDate birthday;
    private String email;
    private String telephone;
    private LocalDate firstContactDate;

    private String streetName;
    private String streetNumber;
    private String postCode;
    private String city;
    private String state;
    private String country;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Appointment> appointment;
}

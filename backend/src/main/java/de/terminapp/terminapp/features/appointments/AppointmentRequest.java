package de.terminapp.terminapp.features.appointments;

import de.terminapp.terminapp.features.product.Product;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name = "appointment_requests")
public class AppointmentRequest {

    @Id
    @SequenceGenerator(
            name = "appointment_requests_sequence",
            sequenceName = "appointment_requests_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "appointment_requests_sequence"
    )
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String telephone;
    private LocalDate date;
    private LocalTime time;
    private String additionalInformation;
    private Boolean isRead;

    @OneToMany(mappedBy = "appointmentRequest")
    private List<Product> products;

    @OneToOne(mappedBy = "appointmentRequest")
    private Appointment appointment;

    //TODO: private Boolean isConfirmed;
    //TODO: private Boolean isCanceled;
}

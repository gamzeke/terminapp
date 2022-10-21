package de.terminapp.terminapp.features.product;

import de.terminapp.terminapp.features.appointments.AppointmentRequest;
import de.terminapp.terminapp.features.company.Company;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @SequenceGenerator(
            name = "business_service_sequence",
            sequenceName = "business_service_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "business_service_sequence"
    )
    private Long id;
    private String description;

    @ManyToOne
    @JoinColumn(name = "appointment_request_id")
    private AppointmentRequest appointmentRequest;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

}

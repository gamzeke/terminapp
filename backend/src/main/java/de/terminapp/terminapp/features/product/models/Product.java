package de.terminapp.terminapp.features.product.models;

import de.terminapp.terminapp.features.appointments.models.AppointmentRequest;
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
    private String name;
    private String price;

    @ManyToOne
    @JoinColumn(name = "appointment_request_id")
    private AppointmentRequest appointmentRequest;
}

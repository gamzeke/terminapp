package de.terminapp.terminapp.features.appointments;

import de.terminapp.terminapp.features.appointments.models.Appointment;
import de.terminapp.terminapp.features.client.ClientRepository;
import de.terminapp.terminapp.features.client.models.Client;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/appointments")
public class AppointmentController {
    private final AppointmentService appointmentService;
    private final ClientRepository clientRepository;

    @GetMapping
    ResponseEntity<List<Appointment>> getAllAppointments() {
        log.info("Request for all Appointments");
        List<Appointment> result = appointmentService.getAllAppointments();
        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    ResponseEntity<Appointment> createAppointment(@Validated @RequestBody Appointment appointment) {
        log.info("Request to create a appointment: {}", appointment);
        System.out.println(appointment.getEmail());
        clientRepository.save(
                Client
                        .builder()
                        .email(appointment.getEmail())
                        .firstName(appointment.getFirstName())
                        .lastName(appointment.getLastName())
                        .telephone(appointment.getTelephone())
                        .build()
        );
        Appointment result = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("{id}")
    ResponseEntity<?> deleteAppointment(@PathVariable Long id) {
        log.info("Request to delete appointment: {}", id);
        appointmentService.deleteAppointment(id);
        return ResponseEntity.ok().build();
    }
}

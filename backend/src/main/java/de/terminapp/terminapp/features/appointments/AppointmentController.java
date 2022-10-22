package de.terminapp.terminapp.features.appointments;

import de.terminapp.terminapp.features.appointments.models.Appointment;
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

    @GetMapping
    ResponseEntity<List<Appointment>> getAllAppointments() {
        log.info("Request for all Appointments");
        List<Appointment> result = appointmentService.getAllAppointments();
        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    ResponseEntity<Appointment> createAppointment(@Validated @RequestBody Appointment Appointment) {
        log.info("Request to create a appointment: {}", Appointment);
        Appointment result = appointmentService.createAppointment(Appointment);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("{id}")
    ResponseEntity<?> deleteAppointment(@PathVariable Long id) {
        log.info("Request to delete appointment: {}", id);
        appointmentService.deleteAppointment(id);
        return ResponseEntity.ok().build();
    }
}

package de.terminapp.terminapp.features.appointments;

import de.terminapp.terminapp.features.appointments.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
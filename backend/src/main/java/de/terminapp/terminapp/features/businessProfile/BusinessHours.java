package de.terminapp.terminapp.features.businessProfile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "business_hours")
public class BusinessHours {
    @Id
    @SequenceGenerator(
            name = "business_hour_sequence",
            sequenceName = "business_hour_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "business_hour_sequence"
    )
    private Long id;

    @Enumerated(EnumType.STRING)
    private WeekDays weekDay;

    private LocalTime opensAt;
    private LocalTime closesAt;

    @ManyToOne
    @JoinColumn(name = "business_profile_id")
    private BusinessProfile businessProfile;
}

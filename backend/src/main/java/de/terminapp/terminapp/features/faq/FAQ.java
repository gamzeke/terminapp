package de.terminapp.terminapp.features.faq;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "faqs")
@Builder
public class FAQ {
    @Id
    @SequenceGenerator(
            name = "faq_sequence",
            sequenceName = "faq_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "faq_sequence"
    )
    private long id;

    private String title;
    private String content;
}

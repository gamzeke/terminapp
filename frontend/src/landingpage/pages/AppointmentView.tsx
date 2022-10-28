import { Button, Container, Group, Stepper, Title } from '@mantine/core';
import { useState } from 'react';

function AppointmentView() {
    const [active, setActive] = useState(1);
    const nextStep = () =>
        setActive(current => (current < 3 ? current + 1 : current));

    const prevStep = () =>
        setActive(current => (current > 0 ? current - 1 : current));

    return (
        <Container>
            <Title>Willkommen</Title>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step
                    label="Schritt 1"
                    description="Termin suchen"
                    allowStepSelect={active > 0}
                />
                <Stepper.Step
                    label="Schritt 2"
                    description="Leistungen auswählen"
                    allowStepSelect={active > 1}
                />
                <Stepper.Step
                    label="Schritt 3"
                    description="Übersicht"
                    allowStepSelect={active > 2}
                />
            </Stepper>
            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Zurück
                </Button>
                <Button onClick={nextStep}>Weiter</Button>
            </Group>
        </Container>
    );
}

export default AppointmentView;

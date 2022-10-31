import {
    Alert,
    Button,
    Card,
    Center,
    Container,
    Divider,
    Group,
    Loader,
    Modal,
    Select,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IService } from '../shared/models/IService';
import ServiceCard from './sections/ServiceCard';

const SERVICE_URL = 'http://localhost:8080/api/v1/products';

function SchedulerView() {
    const navigate = useNavigate();

    const [isOpen, handlers] = useDisclosure(false);

    const [date, setDate] = useState<Date | null>(null);

    const [time, setTime] = useState<string | null>('0');
    const [freeTimes, setFreeTimes] = useState<
        { value: string; label: string }[]
    >([
        { value: '0', label: '07:00 bis 08:00' },
        { value: '1', label: '08:00 bis 09:00' },
        { value: '2', label: '09:00 bis 10:00' },
        { value: '3', label: '10:00 bis 11:00' },
        { value: '4', label: '11:00 bis 12:00' },
        { value: '5', label: '12:00 bis 13:00' },
        { value: '6', label: '13:00 bis 14:00' },
        { value: '7', label: '14:00 bis 15:00' },
        { value: '8', label: '15:00 bis 16:00' },
        { value: '9', label: '16:00 bis 17:00' },
        { value: '10', label: '17:00 bis 18:00' },
    ]);

    const [service, setService] = useState<string | undefined>(undefined);

    const { isLoading, isFetching, error, data } = useQuery(
        ['landingpage-products'],
        () => axios.get(SERVICE_URL).then(res => res.data)
    );

    if (error) {
        return (
            <Center sx={{ height: '100%' }}>
                <Stack align="center">
                    <IconAlertCircle size={32} color="red" />
                    <Text>
                        Leider ist ein Fehler aufgetreten. Versuchen Sie es
                        später nochmal.
                    </Text>
                </Stack>
            </Center>
        );
    }

    if (isFetching || isLoading) {
        return (
            <Center sx={{ height: '100%' }}>
                <Loader size="xl" variant="bars" />
            </Center>
        );
    }

    const serviceSelectHandler = (id: string | undefined) => {
        setService(id);
    };

    const confirmAppointment = () => {
        if (date || time || service) {
            //TODO-MUEJDE: Sende es an das Backend
            handlers.open();
        }
    };

    return (
        <>
            <Modal
                opened={isOpen}
                onClose={() => null}
                fullScreen
                closeOnClickOutside={false}
                withCloseButton={false}
                centered
            >
                <Container>
                    <Group position="center" mb="lg">
                        <IconCircleCheck color="green" size={48} />
                        <Title order={1}>
                            Ihr Termin wurde erfolgreich gebucht
                        </Title>
                    </Group>
                    <Card shadow="sm" p="xl" mb="lg">
                        <Text weight={500} size="lg" mt="md">
                            Wir erwarten Sie am {date?.toLocaleDateString()} um{' '}
                            {
                                freeTimes.filter(f => {
                                    if (time && f.value === time) {
                                        return f;
                                    }
                                })[0].label
                            }
                        </Text>
                    </Card>
                    <Center>
                        <Button
                            mt="lg"
                            size="lg"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Zurück zur Hauptseite
                        </Button>
                    </Center>
                </Container>
            </Modal>

            <Container p="lg" sx={{ position: 'relative' }}>
                <Title order={1}>Willkommen zur Terminauswahl</Title>
                <Alert
                    icon={<IconAlertCircle size={16} />}
                    title="Bitte beachten Sie:"
                    color="indigo"
                    radius="xs"
                    mt="lg"
                >
                    Es werden nur verfügbare Termine angezeigt
                </Alert>

                <Divider mb="lg" mt="lg" />

                <Stack>
                    <Title mb="lg" order={3}>
                        Wählen Sie bitte ein Datum aus
                    </Title>
                    <Calendar
                        value={date}
                        onChange={setDate}
                        fullWidth
                        size="xl"
                        excludeDate={date => date.getDay() === 0}
                    />
                </Stack>

                <Divider mb="lg" mt="lg" />

                <Stack>
                    <Title mb="lg" order={3}>
                        Wählen Sie bitte ein eine Uhrzeit aus
                    </Title>
                    <Select
                        value={time}
                        onChange={setTime}
                        label="Verfügbare Uhrzeiten"
                        placeholder="Pick one"
                        data={freeTimes}
                    />
                </Stack>

                <Divider mb="lg" mt="lg" />

                <Stack>
                    <Title mb="lg" order={3}>
                        Wählen Sie bitte eine Leistung aus
                    </Title>
                    <SimpleGrid cols={4} spacing="xs">
                        {data.map((service: IService) => {
                            return (
                                <ServiceCard
                                    {...service}
                                    key={service.id}
                                    selectedIdHandler={serviceSelectHandler}
                                />
                            );
                        })}
                    </SimpleGrid>
                </Stack>

                <Divider mb="lg" mt="lg" />

                <Group position="center" mt="xl">
                    <Button
                        size="lg"
                        disabled={!time || !date || !service}
                        onClick={() => confirmAppointment()}
                    >
                        Jetzt Termin buchen
                    </Button>
                </Group>
            </Container>
        </>
    );
}

export default SchedulerView;

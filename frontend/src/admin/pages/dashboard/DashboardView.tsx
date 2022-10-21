import { Group, Paper, SimpleGrid, Space, Title } from '@mantine/core';
import NextAppointmentCard from './NextAppointmentCard';
import { StatusCard } from './StatusCard';

function DashboardView() {
    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>Dashboard</Title>
                </Group>
            </Paper>
            <Space h="md" />
            <SimpleGrid cols={2} spacing="sm">
                <NextAppointmentCard />
                <StatusCard />
            </SimpleGrid>
        </>
    );
}

export default DashboardView;

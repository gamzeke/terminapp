import { Group, Paper, Space, Title } from '@mantine/core';
import NextAppointmentCard from './NextAppointmentCard';

function DashboardView() {
    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>Dashboard</Title>
                </Group>
            </Paper>
            <Space h="md" />
            <NextAppointmentCard />
        </>
    );
}

export default DashboardView;

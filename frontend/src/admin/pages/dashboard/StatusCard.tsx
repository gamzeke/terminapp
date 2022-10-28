import {
    Center,
    Group,
    Paper,
    RingProgress,
    SimpleGrid,
    Text,
    Title,
} from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons';

interface StatsRingProps {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: 'up' | 'down';
}

const icons = {
    up: IconArrowUpRight,
    down: IconArrowDownRight,
};

export function StatusCard() {
    const data: StatsRingProps[] = [
        {
            label: 'Termine',
            stats: '42',
            progress: 65,
            color: 'teal',
            icon: 'up',
        },
        {
            label: 'Neue Kunden',
            stats: '14',
            progress: 72,
            color: 'blue',
            icon: 'up',
        },
        {
            label: 'Anfragen',
            stats: '32',
            progress: 52,
            color: 'red',
            icon: 'down',
        },
    ];
    const stats = data.map(stat => {
        const Icon = icons[stat.icon];
        return (
            <Paper withBorder radius="md" p="xs" key={stat.label}>
                <Title order={3}>Juni 2022</Title>
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: stat.progress, color: stat.color }]}
                        label={
                            <Center>
                                <Icon size={22} />
                            </Center>
                        }
                    />

                    <div>
                        <Text
                            color="dimmed"
                            size="xs"
                            transform="uppercase"
                            weight={700}
                        >
                            {stat.label}
                        </Text>
                        <Text weight={700} size="xl">
                            {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        );
    });
    return (
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {stats}
        </SimpleGrid>
    );
}

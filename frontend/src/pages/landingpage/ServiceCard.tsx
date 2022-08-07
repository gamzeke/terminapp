import React from 'react';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { GasStation, Gauge, ManualGearbox, Users } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));

const mockdata = [
    { label: '4 passengers', icon: Users },
    { label: '100 km/h in 4 seconds', icon: Gauge },
    { label: 'Automatic gearbox', icon: ManualGearbox },
    { label: 'Electric', icon: GasStation },
];

export function ServiceCard() {
    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size={18} className={classes.icon} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src="https://cdn.artdeco.de/_Resources/Persistent/1/b/9/5/1b954bea7d800f5544aeac3e4553099bcb0e9847/Header-Large-Schminktipp-Uebersichtsseite_v4-370x500.jpg" alt="Tesla Model S" />
            </Card.Section>

            <Group position="apart" mt="md">
                <div>
                    <Text weight={500}>Makeup S</Text>
                    <Text size="xs" color="dimmed">
                        Lorem ipsum dolor sit
                    </Text>
                </div>
                <Badge variant="outline">Bestseller</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text size="sm" color="dimmed" className={classes.label}>
                    Service
                </Text>

                <Group spacing={8} mb={-8}>
                    {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                            10,00€
                        </Text>
                        <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                        </Text>
                    </div>

                    <Button radius="xl" style={{ flex: 1 }}>
                        Buchen
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}
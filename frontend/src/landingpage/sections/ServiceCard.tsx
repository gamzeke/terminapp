import { Button, Card, createStyles, Group, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles(theme => ({
    card: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
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
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    icon: {
        marginRight: 5,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[2]
                : theme.colors.gray[5],
    },
}));

interface ServiceCardProps {
    readonly id?: string;
    name: string;
    price: string;
    description: string;
    selectedIdHandler?: (id: string | undefined) => void;
}

const ServiceCard = ({
    id,
    name,
    price,
    description,
    selectedIdHandler,
}: ServiceCardProps) => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const [selected, setSelected] = useState<string>('');

    return (
        <Card withBorder className={classes.card}>
            <Group position="apart">
                <Text weight={500}>{name}</Text>
            </Group>
            <Card.Section className={classes.section} mt="md">
                <Text size="sm" color="dimmed" className={classes.label}>
                    Beschreibung
                </Text>
                <Text>{description}</Text>
            </Card.Section>
            <Card.Section className={classes.section}>
                <Stack>
                    <Group position="apart">
                        <Text
                            size="sm"
                            color="dimmed"
                            weight={500}
                            sx={{ lineHeight: 1 }}
                            mt={3}
                        >
                            Preis
                        </Text>
                        <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                            {price}€
                        </Text>
                    </Group>
                    {selectedIdHandler ? (
                        <Button
                            style={{ flex: 1 }}
                            onClick={() => selectedIdHandler(id)}
                        >
                            Buchen
                        </Button>
                    ) : (
                        <Button
                            style={{ flex: 1 }}
                            onClick={() => navigate('scheduler')}
                        >
                            Jetzt buchen
                        </Button>
                    )}
                </Stack>
            </Card.Section>
        </Card>
    );
};

export default ServiceCard;

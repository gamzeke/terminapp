import {
    Center,
    createStyles,
    Group,
    Loader,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title,
    UnstyledButton,
} from '@mantine/core';
import { IconAlertCircle, IconChevronDown, IconChevronUp } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
import { timeMap } from '../../../landingpage/SchedulerView';
import { IAppointments } from '../../../shared/models/IAppointments';

const useStyles = createStyles(theme => ({
    root: {
        backgroundImage: `linear-gradient(-60deg, ${
            theme.colors[theme.primaryColor][4]
        } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        display: 'flex',

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    icon: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing.lg,
        color: theme.colors[theme.primaryColor][6],
    },

    stat: {
        minWidth: 98,
        paddingTop: theme.spacing.xl,
        minHeight: 140,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.white,
    },

    label: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.colors.gray[6],
        lineHeight: 1.2,
    },

    value: {
        fontSize: theme.fontSizes.sm,
        fontWeight: 700,
        color: theme.black,
    },

    count: {
        color: theme.colors.gray[6],
    },

    day: {
        fontSize: 44,
        fontWeight: 700,
        color: theme.white,
        lineHeight: 1,
        textAlign: 'center',
        marginBottom: 5,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    month: {
        fontSize: theme.fontSizes.sm,
        color: theme.white,
        lineHeight: 1,
        textAlign: 'center',
    },

    controls: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: theme.spacing.xl * 2,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 0,
            marginBottom: theme.spacing.xl,
        },
    },

    date: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    control: {
        height: 28,
        width: '100%',
        color: theme.colors[theme.primaryColor][2],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.md,
        transition: 'background-color 50ms ease',

        [theme.fn.smallerThan('xs')]: {
            height: 34,
            width: 34,
        },

        '&:hover': {
            backgroundColor: theme.colors[theme.primaryColor][5],
            color: theme.white,
        },
    },

    controlIcon: {
        [theme.fn.smallerThan('xs')]: {
            transform: 'rotate(-90deg)',
        },
    },
}));

export function NextAppointmentCard() {
    const { classes } = useStyles();
    const [date, setDate] = useState(new Date());

    const { isLoading, isFetching, error, data } = useQuery(['clients'], () =>
        axios
            .get('http://localhost:8080/api/v1/appointments')
            .then(res => res.data)
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

    const stats = data
        .filter((d: IAppointments) => {
            return (
                new Date(d.date).getDay() === date.getDay() &&
                new Date(d.date).getMonth() === date.getMonth() &&
                new Date(d.date).getFullYear() === date.getFullYear()
            );
        })
        .map((d: IAppointments) => (
            <Group key={d.name}>
                <Paper
                    sx={{
                        height: '300px',
                        padding: '1rem',
                    }}
                >
                    <SimpleGrid cols={2}>
                        <Title order={6}>Uhrzeit: </Title>
                        <Title order={5}>{timeMap[d.time].label}</Title>
                        <Title order={6}>Name: </Title>
                        <Title order={5}>
                            {d.firstName} {d.lastName}
                        </Title>
                        <Title order={6}>E-Mail: </Title>
                        <Title order={5}>{d.email}</Title>
                        <Title order={6}>Telefon: </Title>
                        <Title order={5}>{d.telephone}</Title>
                        <Title order={6}>Service: </Title>
                        <Title order={5}>{d.name}</Title>
                        <Title order={6}>Beschreibung: </Title>
                        <Title order={5}>{d.description}</Title>
                        <Title order={6}>Preis: </Title>
                        <Title order={5}>{d.price}</Title>
                    </SimpleGrid>
                </Paper>
            </Group>
        ));

    return (
        <div className={classes.root}>
            <div className={classes.controls}>
                <UnstyledButton
                    className={classes.control}
                    onClick={() =>
                        setDate(current =>
                            dayjs(current).add(1, 'day').toDate()
                        )
                    }
                >
                    <IconChevronUp className={classes.controlIcon} />
                </UnstyledButton>
                <div className={classes.date}>
                    <Text className={classes.day}>
                        {dayjs(date).format('DD')}
                    </Text>
                    <Text className={classes.month}>
                        {dayjs(date).format('MMMM')}
                    </Text>
                </div>
                <UnstyledButton
                    className={classes.control}
                    onClick={() =>
                        setDate(current =>
                            dayjs(current).subtract(1, 'day').toDate()
                        )
                    }
                >
                    <IconChevronDown className={classes.controlIcon} />
                </UnstyledButton>
            </div>
            <Group sx={{ flex: 1, height: '300px' }}>{stats}</Group>
        </div>
    );
}

export default NextAppointmentCard;

import {
    Burger,
    Button,
    Container,
    createStyles,
    Group,
    Header,
    Title,
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanyContext } from '../../shared/context/CompanyContext';

const HEADER_HEIGHT = 60;

const useStyles = createStyles(theme => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },
    linkLabel: {
        marginRight: 5,
    },
}));

const PageHeader = () => {
    const { classes } = useStyles();
    const [opened, toggleOpened] = useState(false);
    const { company, ...rest } = useCompanyContext();
    const navigate = useNavigate();

    const loginButtonHandler = () => {
        navigate('auth');
    };

    const appointmentButtonHandler = () => {
        navigate('scheduler');
    };

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={oldState => toggleOpened(!oldState)}
                        className={classes.burger}
                        size="sm"
                    />
                    <Title order={3}>{company.companyName}</Title>
                </Group>
                <Group>
                    <Button
                        color="green"
                        sx={{ height: 30 }}
                        onClick={appointmentButtonHandler}
                    >
                        Jetzt einen Termin vereinbaren
                    </Button>
                    <Button sx={{ height: 30 }} onClick={loginButtonHandler}>
                        Login
                    </Button>
                </Group>
            </Container>
        </Header>
    );
};

export default PageHeader;

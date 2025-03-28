import {
    Button,
    Container,
    createStyles,
    Group,
    Text,
    Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles(theme => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

const PageNotFound = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    return (
        <Container className={classes.root}>
            <div className={classes.label}>🫤</div>
            <Title className={classes.title}>Wo bist du denn gelandet?</Title>
            <Text
                color="dimmed"
                size="lg"
                align="center"
                className={classes.description}
            >
                Leider ist dies nur eine 404-Seite. Vielleicht haben Sie sich
                bei der Adresse vertippt, oder die Seite wurde zu einer anderen
                URL verschoben worden.
            </Text>
            <Group position="center">
                <Button
                    variant="subtle"
                    size="md"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Zurück zum Home
                </Button>
            </Group>
        </Container>
    );
};

export default PageNotFound;

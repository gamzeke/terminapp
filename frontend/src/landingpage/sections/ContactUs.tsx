import { Button, Center, createStyles, Group, SimpleGrid, Stack, Text, Textarea, TextInput, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 400,
        boxSizing: 'border-box',
        backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
            } 100%)`,
        borderRadius: theme.radius.md,
        padding: theme.spacing.xl * 2.5,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            padding: theme.spacing.xl * 1.5,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.white,
        lineHeight: 1,
    },

    description: {
        color: theme.colors[theme.primaryColor][0],
        maxWidth: 300,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
    },

    social: {
        color: theme.white,

        '&:hover': {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,

        '&::placeholder': {
            color: theme.colors.gray[5],
        },
    },

    inputLabel: {
        color: theme.black,
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },
}));

const ContactUs = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={3} >
                <Center>
                    <Stack>
                        <Title order={3} className={classes.title}>Falls Sie noch Fragen haben, dann schreiben Sie uns einfach. Wir werden uns so schnell wie möglich bei Ihnen melden.</Title>
                        <Title className={classes.title}>info@mustermann.de</Title>
                    </Stack>
                </Center>
                <Center>
                    <Title className={classes.title}>oder</Title>
                </Center>
                <Center>
                    <Stack>
                        <Title order={3} className={classes.title}> Rufen Sie uns einfach an.</Title>
                        <Title className={classes.title}>+49123456789</Title>
                    </Stack>
                </Center>
            </SimpleGrid>
        </div>
    );
}

export default ContactUs;
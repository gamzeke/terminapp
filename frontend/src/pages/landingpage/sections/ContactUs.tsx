import { Button, createStyles, Group, SimpleGrid, Text, Textarea, TextInput, Title } from '@mantine/core';

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
            <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <div>
                    <Title className={classes.title}>Kontakt</Title>
                    <Text className={classes.description} mt="sm" mb="sm" align="justify">
                        Falls Sie noch Fragen haben, dann schreiben Sie uns einfach. Wir werden uns so schnell wie möglich bei dir melden.
                    </Text>
                    <Title className={classes.title}>oder</Title>
                    <Text className={classes.description} mt="sm" mb="sm" align="justify">
                        Rufen Sie uns einfach an.
                    </Text>
                    <Title className={classes.title}>+49123456789</Title>
                </div>
                <div className={classes.form}>
                    <TextInput
                        label="E-Mail"
                        placeholder="max.mustermann@muster.de"
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Vorname"
                        placeholder="Max"
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Nachname"
                        placeholder="Mustermann"
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label="Ihre Nachricht"
                        placeholder="Hallo, ich habe mal eine Frage..."
                        minRows={4}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Group position="right" mt="md">
                        <Button className={classes.control}>Nachricht senden</Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    );
}

export default ContactUs;
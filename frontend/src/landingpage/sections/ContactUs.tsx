import { Center, createStyles, SimpleGrid, Stack, Title } from '@mantine/core';
import { useCompanyContext } from '../../shared/context/CompanyContext';

const useStyles = createStyles(theme => ({
    wrapper: {
        backgroundImage: `linear-gradient(-60deg, ${
            theme.colors[theme.primaryColor][4]
        } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
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

const ContactUs = ({ currentLanguage }: { currentLanguage: string }) => {
    const { classes } = useStyles();
    const { company, ...rest } = useCompanyContext();

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={3}>
                <Center>
                    <Stack>
                        <Title order={3} className={classes.title}>
                            {currentLanguage === 'german'
                                ? 'Schreiben Sie uns'
                                : 'Write us'}
                        </Title>
                        <Title className={classes.title}>{company.email}</Title>
                    </Stack>
                </Center>
                <Center>
                    <Title className={classes.title}>
                        {currentLanguage === 'german' ? 'oder' : 'or'}
                    </Title>
                </Center>
                <Center>
                    <Stack>
                        <Title order={3} className={classes.title}>
                            {currentLanguage === 'german'
                                ? ' rufen Sie uns einfach an.'
                                : 'call us.'}
                        </Title>
                        <Title className={classes.title}>{company.phone}</Title>
                    </Stack>
                </Center>
            </SimpleGrid>
        </div>
    );
};

export default ContactUs;

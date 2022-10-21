import { Anchor, createStyles, Group, Title } from '@mantine/core';
import { useCompanyContext } from '../../shared/context/CompanyContext';

const useStyles = createStyles(theme => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

const PageFooter = () => {
    const { classes } = useStyles();
    const { company, ...rest } = useCompanyContext();

    const links = [
        {
            link: '#',
            label: 'Datenschutz',
        },
        {
            link: '#',
            label: 'Impressum',
        },
    ];
    const items = links.map(link => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            sx={{ lineHeight: 1 }}
            onClick={event => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Title order={6}>{company.companyName}</Title>
                <Group className={classes.links}>{items}</Group>
            </div>
        </div>
    );
};

export default PageFooter;

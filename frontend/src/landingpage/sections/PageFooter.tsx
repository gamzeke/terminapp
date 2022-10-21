import { createStyles, Title } from '@mantine/core';
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
}));

const PageFooter = () => {
    const { classes } = useStyles();
    const { company, ...rest } = useCompanyContext();

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Title order={6}>{company.companyName}</Title>
            </div>
        </div>
    );
};

export default PageFooter;

import { Footer, Group, Title } from '@mantine/core';
import { useCompanyContext } from '../../shared/context/CompanyContext';

const PageFooter = () => {
    const { company, ...rest } = useCompanyContext();

    return (
        <Footer
            height={72}
            sx={theme => ({
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '2rem',
                color: theme.colors.main[4],
            })}
            fixed
        >
            <Group position="left">
                <Title order={6}>{company.companyName}</Title>
            </Group>
        </Footer>
    );
};

export default PageFooter;

import { Group, Paper, Stack, Textarea, TextInput, Title } from '@mantine/core';
import { useCompanyContext } from '../../../shared/context/CompanyContext';

const Company = () => {
    const { company, updateCompany } = useCompanyContext();

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position="apart">
                    <Title order={3}>Geschäft</Title>
                </Group>
                <TextInput
                    placeholder="Mustermann AG"
                    label="Name"
                    variant="filled"
                    value={company.companyName}
                    onChange={event =>
                        updateCompany('companyName', event?.currentTarget.value)
                    }
                    required
                />
                <Textarea
                    autosize
                    placeholder="Wir sind ein Familienunternehmen seit ..."
                    value={company.welcomeText}
                    onChange={event =>
                        updateCompany('welcomeText', event?.currentTarget.value)
                    }
                    label="Begrüßungstext"
                />
            </Stack>
        </Paper>
    );
};

export default Company;

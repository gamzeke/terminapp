import { Group, Paper, Stack, TextInput, Title } from '@mantine/core';
import { useCompanyContext } from '../../../shared/context/CompanyContext';

const Address = () => {
    const { company, updateCompany } = useCompanyContext();

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position="apart">
                    <Title order={3}>Adresse</Title>
                </Group>
                <TextInput
                    value={company.street}
                    onChange={event => {
                        updateCompany('street', event.currentTarget.value);
                    }}
                    label="Straße"
                    variant="filled"
                    placeholder="Musterstraße 1"
                    required
                />
                <TextInput
                    value={company.additionalInformation}
                    onChange={event => {
                        updateCompany(
                            'additionalInformation',
                            event.currentTarget.value
                        );
                    }}
                    placeholder="Neben McDonalds"
                    label="Zusätzliche Informationen"
                    variant="filled"
                />
                <TextInput
                    value={company.postCode}
                    onChange={event => {
                        updateCompany('postCode', event.currentTarget.value);
                    }}
                    placeholder="12345"
                    label="Postleitzahl"
                    variant="filled"
                    required
                />
                <TextInput
                    value={company.city}
                    onChange={event => {
                        updateCompany('city', event.currentTarget.value);
                    }}
                    placeholder="Musterstadt"
                    label="Stadt"
                    variant="filled"
                    required
                />
                <TextInput
                    value={company.state}
                    onChange={event => {
                        updateCompany('state', event.currentTarget.value);
                    }}
                    placeholder="Musterland"
                    label="Bundesland"
                    variant="filled"
                    required
                />
                <TextInput
                    placeholder="info@musterag.de"
                    label="E-Mail"
                    variant="filled"
                    value={company.email}
                    onChange={event =>
                        updateCompany('email', event?.currentTarget.value)
                    }
                    required
                />
                <TextInput
                    placeholder="0123456789"
                    label="Telefon"
                    variant="filled"
                    value={company.phone}
                    onChange={event =>
                        updateCompany('phone', event?.currentTarget.value)
                    }
                    required
                />
            </Stack>
        </Paper>
    );
};

export default Address;

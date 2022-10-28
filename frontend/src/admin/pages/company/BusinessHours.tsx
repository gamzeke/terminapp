import { Group, Paper, Stack, Title } from '@mantine/core';
import { TimeRangeInput } from '@mantine/dates';
import { useCompanyContext } from '../../../shared/context/CompanyContext';

const BusinessHours = () => {
    const { company, updateCompanyHours, ...rest } = useCompanyContext();
    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position="apart">
                    <Title order={3}>Öffnungszeiten</Title>
                </Group>
                <TimeRangeInput
                    label="Montag"
                    value={[company.mondayOpen, company.mondayClose]}
                    onChange={event => {
                        updateCompanyHours(
                            ['mondayOpen', 'mondayClose'],
                            event
                        );
                    }}
                />
                <TimeRangeInput
                    label="Dienstag"
                    value={[company.tuesdayOpen, company.tuesdayClose]}
                    onChange={event => {
                        updateCompanyHours(
                            ['tuesdayOpen', 'tuesdayClose'],
                            event
                        );
                    }}
                />
                <TimeRangeInput
                    label="Mittwoch"
                    value={[company.wednesdayOpen, company.wednesdayClose]}
                    onChange={event => {
                        updateCompanyHours(
                            ['wednesdayOpen', 'wednesdayClose'],
                            event
                        );
                    }}
                />
                <TimeRangeInput
                    label="Donnerstag"
                    value={[company.thursdayOpen, company.thursdayClose]}
                    onChange={event => {
                        updateCompanyHours(
                            ['thursdayOpen', 'thursdayClose'],
                            event
                        );
                    }}
                />
                <TimeRangeInput
                    label="Freitag"
                    value={[company.fridayOpen, company.fridayClose]}
                    onChange={event => {
                        updateCompanyHours(
                            ['fridayOpen', 'fridayClose'],
                            event
                        );
                    }}
                />
                <TimeRangeInput
                    label="Samstag"
                    value={[company.saturdayOpen, company.saturdayClose]}
                    onChange={event => {
                        updateCompanyHours(
                            ['saturdayOpen', 'saturdayClose'],
                            event
                        );
                    }}
                />
            </Stack>
        </Paper>
    );
};

export default BusinessHours;

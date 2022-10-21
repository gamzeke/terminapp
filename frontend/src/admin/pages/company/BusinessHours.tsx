import { Button, Group, Paper, SimpleGrid, Stack, Title } from '@mantine/core';
import { TimeRangeInput } from '@mantine/dates';
import { useState } from 'react';


interface BusinessDayProps {
    day: string;
    businessHourChangesHandler: (hour: IBusinessHours) => void
}

const BusinessHourDay = ({ day, businessHourChangesHandler }: BusinessDayProps) => {
    const [value, _setValue] = useState<[Date | null, Date | null]>([null, null]);

    const updateValue = (value: [Date, Date]) => {
        const hourChange: IBusinessHours = {
            day: day,
            from: value[0],
            till: value[1],
        }
        businessHourChangesHandler(hourChange)
    }

    return <>
        <Title order={5}>{day}</Title>
        <Group>
            <TimeRangeInput label="Öffnungszeit" value={value} onChange={updateValue} />
        </Group>
    </>
}

interface IBusinessHours {
    day: string
    from: Date
    till: Date
}

const BusinessHours = () => {
    const businessHourChangesHandler = (hour: IBusinessHours) => {
        //TODO-MMUEJDE: Implement me 
    }

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position='apart'>
                    <Title order={3}>Öffnungszeiten</Title>
                </Group>
                <SimpleGrid cols={2}>
                    <BusinessHourDay day={"Montag"} businessHourChangesHandler={businessHourChangesHandler} />
                    <BusinessHourDay day={"Dienstag"} businessHourChangesHandler={businessHourChangesHandler} />
                    <BusinessHourDay day={"Mittwoch"} businessHourChangesHandler={businessHourChangesHandler} />
                    <BusinessHourDay day={"Donnerstag"} businessHourChangesHandler={businessHourChangesHandler} />
                    <BusinessHourDay day={"Freitag"} businessHourChangesHandler={businessHourChangesHandler} />
                    <BusinessHourDay day={"Samstag"} businessHourChangesHandler={businessHourChangesHandler} />
                    <BusinessHourDay day={"Sonntag"} businessHourChangesHandler={businessHourChangesHandler} />
                </SimpleGrid>
            </Stack>
        </Paper>
    )
}

export default BusinessHours
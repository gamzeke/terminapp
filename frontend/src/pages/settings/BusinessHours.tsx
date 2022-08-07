import { Title, Paper, Group, Space } from '@mantine/core'
import { TimeInput } from '@mantine/dates'


type BusinessDayProps = {
    day: string
}

const BusinessDay = (props: BusinessDayProps) => {
    return <>
        <Title order={5}>{props.day}</Title>
        <Group>
            <TimeInput label="Von" />
            <TimeInput label="Bis" />
            <TimeInput label="Von" />
            <TimeInput label="Bis" />
        </Group>
        <Space h="lg" />
    </>
}

const BusinessHours = () => {
    return (
        <Paper shadow="sm" p="lg">
            <Title order={3}>Meine Öffnungszeiten</Title>
            <BusinessDay day={"Montag"} />
            <BusinessDay day={"Dienstag"} />
            <BusinessDay day={"Mittwoch"} />
            <BusinessDay day={"Donnerstag"} />
            <BusinessDay day={"Freitag"} />
            <BusinessDay day={"Samstag"} />
            <BusinessDay day={"Sonntag"} />
        </Paper>
    )
}

export default BusinessHours
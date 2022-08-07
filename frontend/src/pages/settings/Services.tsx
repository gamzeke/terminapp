import { Divider, Group, Paper, Textarea, TextInput, Title } from '@mantine/core'
import { ZoomMoney } from 'tabler-icons-react'

const Service = () => {
    return <>
        <TextInput label="Name" variant="filled" required />
        <Textarea
            label="Beschreibung"
            required
        />
        <TextInput icon={<ZoomMoney />} label="Preis" variant="filled" required />
    </>
}

const Services = () => {
    return (
        <Paper shadow="sm" p="lg">
            <Title order={3}>Meine Leistungen</Title>
            <Service />
            <Divider my="sm" />
            <Service />
            <Divider my="sm" />
        </Paper>
    )
}

export default Services
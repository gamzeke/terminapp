import { Title, TextInput, Paper } from '@mantine/core'

const Address = () => {
    return (
        <Paper shadow="sm" p="lg">
            <Title order={3}>Meine Adresse</Title>
            <TextInput label="Straße" variant="filled" required />
            <TextInput label="Postleitzahl" variant="filled" required />
            <TextInput label="Stadt" variant="filled" required />
            <TextInput label="Bundesland" variant="filled" required />
        </Paper>
    )
}

export default Address
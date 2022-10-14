import { Paper, Textarea, TextInput, Title } from '@mantine/core'

const Company = () => {
    return (
        <Paper shadow="sm" p="lg">
            <Title order={3}>Meine Geschäftsdaten</Title>
            <TextInput placeholder="" label="Name" variant="filled" required />
            <TextInput placeholder="" label="Slogan" variant="filled" />
            <Textarea
                placeholder="Your comment"
                label="Zusätzliche Informationen"
            />
        </Paper>
    )
}

export default Company
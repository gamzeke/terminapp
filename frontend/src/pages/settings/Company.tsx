import { Avatar, Image, Paper, Textarea, TextInput, Title } from '@mantine/core'

const Company = () => {
    return (
        <Paper shadow="sm" p="lg">
            <Title order={3}>Meine Geschäftsdaten</Title>
            {/* TODO-MMUEJDE: Wie kann ich ein Bild hochladen? */}
            <Image
                radius="sm"
                width={150}
                height={150}
                src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            />
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
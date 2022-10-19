import { Button, Group, Paper, Stack, Textarea, TextInput, Title } from '@mantine/core';
import { useState } from 'react';

interface ICompany {
    name: string;
    welcomeText: string;
}

const Company = () => {
    const [name, setName] = useState("");
    const [welcomeText, setWelcomeText] = useState("");

    const saveChangesHandler = () => {
        //TODO-MMUEJDE: Implement me 
    }

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position='apart'>
                    <Title order={3}>Geschäft</Title>
                    <Button onClick={saveChangesHandler} size='xs'>Speichern</Button>
                </Group>
                <TextInput
                    placeholder="Mustermann AG"
                    label="Name"
                    variant="filled"
                    value={name}
                    onChange={(event) => setName(event?.currentTarget.value)}
                    required />
                <Textarea
                    placeholder="Wir sind ein Familienunternehmen seit ..."
                    value={welcomeText}
                    onChange={(event) => setWelcomeText(event?.currentTarget.value)}
                    label="Begrüßungstext"
                />
            </Stack>
        </Paper >
    )
}

export default Company
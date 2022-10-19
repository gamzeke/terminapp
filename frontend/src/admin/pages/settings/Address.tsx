import { Title, TextInput, Paper, Stack, Button, Group } from '@mantine/core'
import { useState } from 'react';

interface ICompanyAddress {
    name: string;
    welcomeText: string;
}

const Address = () => {
    const [street, setStreet] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [code, setCode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const saveChangesHandler = () => {
        //TODO-MMUEJDE: Implement me 
    }

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position='apart'>
                    <Title order={3}>Adresse</Title>
                    <Button onClick={saveChangesHandler} size='xs'>Speichern</Button>
                </Group>
                <TextInput
                    value={street}
                    onChange={(event) => { setStreet(event.currentTarget.value) }}
                    label="Straße"
                    variant="filled"
                    placeholder='Musterstraße 1'
                    required />
                <TextInput
                    value={additionalInformation}
                    onChange={(event) => { setAdditionalInformation(event.currentTarget.value) }}
                    placeholder='Neben McDonalds'
                    label="Zusätzliche Informationen"
                    variant="filled" />
                <TextInput
                    value={code}
                    onChange={(event) => { setCode(event.currentTarget.value) }}
                    placeholder='12345'
                    label="Postleitzahl"
                    variant="filled"
                    required />
                <TextInput
                    value={city}
                    onChange={(event) => { setCity(event.currentTarget.value) }}
                    placeholder='Musterstadt'
                    label="Stadt"
                    variant="filled"
                    required />
                <TextInput
                    value={state}
                    onChange={(event) => { setState(event.currentTarget.value) }}
                    placeholder='Musterland'
                    label="Bundesland"
                    variant="filled"
                    required />
            </Stack>
        </Paper>
    )
}

export default Address
import { Button, Modal, Stack, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';

interface AddServiceDialogProps {
    createServiceButtonHandler: (name: string, description: string, price: string) => void
}

const AddServiceDialog = ({ createServiceButtonHandler }: AddServiceDialogProps) => {
    const [opened, setOpened] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Neue Leistung erstellen"
                centered
            >
                <Stack>
                    <TextInput
                        label="Name"
                        value={name}
                        onChange={(event) => setName(event?.currentTarget.value)}
                        required
                    />
                    <Textarea
                        label="Beschreibung"
                        onChange={(event) => setDescription(event?.currentTarget.value)}
                        value={description}
                        required
                    />
                    <TextInput
                        label="Preis"
                        onChange={(event) => setPrice(event?.currentTarget.value)}
                        value={price}
                        required />
                    <Button color="green" onClick={() => {
                        setOpened(false)
                        createServiceButtonHandler(name, description, price)
                    }} size='xs'>Leistung erstellen</Button>
                </Stack>
            </Modal>
            <Button color="green" onClick={() => setOpened(true)} size='xs'>Leistung erstellen</Button>
        </>
    )
}

export default AddServiceDialog
import { Button, Modal, Stack, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';

interface AddFAQDialogProps {
    createFAQButtonHandler: (question: string, answer: string) => void;
}

const AddFAQDialog = ({ createFAQButtonHandler }: AddFAQDialogProps) => {
    const [opened, setOpened] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Neue FAQ erstellen"
                centered
            >
                <Stack>
                    <TextInput
                        label="Frage"
                        value={question}
                        onChange={event =>
                            setQuestion(event?.currentTarget.value)
                        }
                        required
                    />
                    <Textarea
                        label="Antwort"
                        onChange={event =>
                            setAnswer(event?.currentTarget.value)
                        }
                        value={answer}
                        required
                    />
                    <Button
                        color="green"
                        onClick={() => {
                            setOpened(false);
                            createFAQButtonHandler(question, answer);
                        }}
                        size="xs"
                    >
                        FAQ erstellen
                    </Button>
                </Stack>
            </Modal>
            <Button color="green" onClick={() => setOpened(true)} size="xs">
                FAQ erstellen
            </Button>
        </>
    );
};

export default AddFAQDialog;

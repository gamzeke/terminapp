import {
    Anchor, Button, Center, Container,
    Group, Paper, PasswordInput, TextInput, Title
} from '@mantine/core';
import { useState } from 'react';

interface User {
    email: string;
    password: string;
}

const AuthView = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const forgotMyPasswordHandler = () => {
        if (mail.length && password.length) {
            const user: User = {
                email: mail,
                password: password
            }
            //TODO-MMUEJDE: Sende es an das Backend
        } else {
            //TODO-MMUEJDE: Was soll passieren?
        }
    }

    return (
        <Center sx={{ height: "100%" }}>
            <Container size={420} my={40}>
                <Title align="center">
                    Teminplaner App
                </Title>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput
                        label="E-Mail"
                        placeholder="max.mustermann@muster.de"
                        value={mail}
                        onChange={(event) => setMail(event.currentTarget.value)} required />
                    <PasswordInput
                        label="Passwort"
                        placeholder="Dein Passwort"
                        value={password}
                        onChange={(event) => setPassword(event.currentTarget.value)}
                        required mt="md" />
                    <Group position="apart" mt="md">
                        <Anchor<'a'> onClick={forgotMyPasswordHandler} href="#" size="sm">
                            Haben Sie ihr Passwort vergessen?
                        </Anchor>
                    </Group>
                    <Button disabled={!mail.length || !password.length} fullWidth mt="xl">
                        Login
                    </Button>
                </Paper>
            </Container>
        </Center>
    );
}

export default AuthView;
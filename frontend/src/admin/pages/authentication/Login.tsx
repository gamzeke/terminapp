import {
    Anchor,
    Button,
    Group,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthStatusType } from './AuthView';

export interface User {
    username: string;
    password: string;
}

interface LoginProps {
    updateAuthStatus: (state: AuthStatusType) => void;
}

const Login = ({ updateAuthStatus }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = () => {
        if (username.length && password.length) {
            const user: User = {
                username: username,
                password: password,
            };
            //TODO-MMUEJDE: Sende es an das Backend
        } else {
            //TODO-MMUEJDE: Was soll passieren?
        }
    };

    const forgotMyPasswordHandler = () => {
        updateAuthStatus('PASSWORD');
    };

    const backToLandingPageButtonHandler = () => {
        navigate('/');
    };

    return (
        <>
            <Title align="center">Willkommen zum Termin App Backoffice</Title>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="Benutzername"
                    placeholder="Dein Benutzername"
                    value={username}
                    onChange={event => setUsername(event.currentTarget.value)}
                    required
                />
                <PasswordInput
                    label="Passwort"
                    placeholder="Dein Passwort"
                    value={password}
                    onChange={event => setPassword(event.currentTarget.value)}
                    required
                    mt="md"
                />
                <Group position="apart" mt="md">
                    <Anchor<'a'>
                        onClick={forgotMyPasswordHandler}
                        href="#"
                        size="sm"
                    >
                        Haben Sie ihr Passwort vergessen?
                    </Anchor>
                </Group>
                <Button
                    disabled={!username.length || !password.length}
                    fullWidth
                    mt="xl"
                    onClick={loginHandler}
                >
                    Login
                </Button>
                <Button
                    fullWidth
                    color="green"
                    mt="xl"
                    onClick={backToLandingPageButtonHandler}
                >
                    Zurück zur Homepage
                </Button>
            </Paper>
        </>
    );
};

export default Login;

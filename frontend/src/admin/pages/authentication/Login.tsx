import {
    Anchor,
    Button,
    Group,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../shared/models/IUser';
import { AuthStatusType } from './AuthView';

const AUTH_URL = 'http://localhost:8080/api/v1/users';

interface LoginProps {
    updateAuthStatus: (state: AuthStatusType) => void;
}

const Login = ({ updateAuthStatus }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useLocalStorage({
        key: 'current-user',
        defaultValue: false,
    });

    const loginHandler = () => {
        if (username.length && password.length) {
            const user: IUser = {
                username: username,
                password: password,
            };
            return axios
                .post(AUTH_URL, user, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                .then(() => {
                    showNotification({
                        title: 'Erfolgreich',
                        color: 'green',
                        message: 'Der Login war erfolgreich.',
                    });
                    setCurrentUser(true);
                    navigate('/admin');
                })
                .catch(error => {
                    showNotification({
                        title: 'Fehler',
                        color: 'red',
                        message:
                            'Der Login war nicht erfolgreich. Bitte versuchen Sie es nochmal.',
                    });
                });
        } else {
            showNotification({
                title: 'Fehler',
                color: 'red',
                message: 'Bitte überprüfen Sie nochmal Ihre Logindaten.',
            });
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

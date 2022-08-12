import { upperFirst } from '@mantine/hooks';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Card,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Center,
} from '@mantine/core';
import { useState } from 'react';

type AuthPage = "login" | "register"

const AuthView = () => {
    const [type, toggle] = useState<AuthPage>('login');

    return (
        <Center>
            <Card shadow="sm" p="lg">
               
            </Card>
        </Center>
    );
}

export default AuthView;
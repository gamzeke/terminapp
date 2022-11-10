import { Center, Container } from '@mantine/core';
import { useState } from 'react';
import Login from './Login';
import PasswordForgot from './PasswordForgot';

export type AuthStatusType = 'LOGIN' | 'PASSWORD';

const AuthView = () => {
    const [authStatus, setAuthStatus] = useState<AuthStatusType>('LOGIN');

    const updateAuthStatus = (state: AuthStatusType) => {
        setAuthStatus(state);
    };

    return (
        <Center sx={{ height: '100%' }}>
            <Container size={420} my={40}>
                {authStatus == 'LOGIN' ? (
                    <Login updateAuthStatus={updateAuthStatus} />
                ) : (
                    <PasswordForgot updateAuthStatus={updateAuthStatus} />
                )}
            </Container>
        </Center>
    );
};

export default AuthView;

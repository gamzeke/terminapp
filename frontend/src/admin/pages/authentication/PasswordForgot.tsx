import { Anchor, Box, Center, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { AuthStatusType } from './AuthView';

interface PasswordForgotProps {
    updateAuthStatus: (state: AuthStatusType) => void;
}

const PasswordForgot = ({ updateAuthStatus }: PasswordForgotProps) => {
    return (
        <>
            <Title align="center">Passwort vergessen</Title>
            <Text color="dimmed" size="sm" align="center">
                Bitte wenden Sie sich Ihrem Administrator
            </Text>
            <Anchor
                color="dimmed"
                size="sm"
                onClick={() => {
                    updateAuthStatus('LOGIN');
                }}
            >
                <Center>
                    <IconArrowLeft size={12} stroke={1.5} />
                    <Box ml={5}>Zurück</Box>
                </Center>
            </Anchor>
        </>
    );
};

export default PasswordForgot;

import React, { useState } from 'react'
import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { AuthStatusType } from './AuthView';

interface PasswordForgotProps {
    updateAuthStatus: (state: AuthStatusType) => void
}

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 26,
        fontWeight: 900,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));

const PasswordForgot = ({ updateAuthStatus }: PasswordForgotProps) => {
    const { classes } = useStyles();

    const [mail, setMail] = useState("");

    const resetPasswordHandler = () => {
        //TODO-MMUEJDE: Ein Passwort Reset Link anfordern
    }

    return (
        <>
            <Title className={classes.title} align="center">
                Passwort vergessen
            </Title>
            <Text color="dimmed" size="sm" align="center">
                Bitte geben Sie die E-Mail Adresse ein
            </Text>
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <TextInput value={mail} onChange={(event) => { setMail(event.currentTarget.value) }} label="Deine E-Mail" placeholder="max.mustermann@muster.de" required />
                <Group position="apart" mt="lg" className={classes.controls}>
                    <Anchor color="dimmed" size="sm" className={classes.control} onClick={() => { updateAuthStatus("LOGIN") }}>
                        <Center inline>
                            <IconArrowLeft size={12} stroke={1.5} />
                            <Box ml={5}>Zurück</Box>
                        </Center>
                    </Anchor>
                    <Button onClick={() => { resetPasswordHandler() }} className={classes.control}>Passwort zurücksetzen</Button>
                </Group>
            </Paper>
        </>
    );
}

export default PasswordForgot
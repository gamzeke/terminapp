import {
    ActionIcon,
    Button,
    Container,
    Divider,
    Group,
    Header,
    Switch,
    Title,
} from '@mantine/core';
import { IconLanguage, IconMoonStars, IconPlus, IconSun } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useCompanyContext } from '../../shared/context/CompanyContext';

const PageHeader = ({
    toggleCurrentTheme,
    toggleLanguage,
    currentLanguage,
}: {
    toggleCurrentTheme: () => void;
    toggleLanguage: () => void;
    currentLanguage: string;
}) => {
    const { company, ...rest } = useCompanyContext();
    const navigate = useNavigate();

    const loginButtonHandler = () => {
        navigate('auth');
    };

    const appointmentButtonHandler = () => {
        navigate('scheduler');
    };

    const increaseFontSize = () => {};

    return (
        <Header height={60} sx={{ borderBottom: 0 }} mb={120}>
            <Container
                sx={{
                    height: 60,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                fluid
            >
                <Group>
                    <Title order={3}>{company.companyName}</Title>
                </Group>
                <Group>
                    <Divider orientation="vertical" />
                    <Switch
                        size="md"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onLabel={
                            <IconLanguage
                                size={16}
                                stroke={2.5}
                                color="black"
                            />
                        }
                        offLabel={
                            <IconLanguage
                                size={16}
                                stroke={2.5}
                                color="black"
                            />
                        }
                        onClick={() => {
                            toggleLanguage();
                        }}
                    />
                    <Switch
                        size="md"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onLabel={
                            <IconSun size={16} stroke={2.5} color="yellow" />
                        }
                        offLabel={
                            <IconMoonStars
                                size={16}
                                stroke={2.5}
                                color="blue"
                            />
                        }
                        onClick={() => {
                            toggleCurrentTheme();
                        }}
                    />
                    <ActionIcon
                        title="Schrift vergrößern"
                        onClick={() => {
                            increaseFontSize();
                        }}
                    >
                        <IconPlus size={18} />
                    </ActionIcon>
                    <Divider orientation="vertical" />
                    <Button
                        sx={theme => ({
                            height: 30,
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[0]
                                    : theme.colors.light[0],
                        })}
                        onClick={appointmentButtonHandler}
                    >
                        {currentLanguage === 'german'
                            ? 'Jetzt einen Termin vereinbaren'
                            : 'Set an appointment'}
                    </Button>
                    <Button
                        sx={theme => ({
                            height: 30,
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[0]
                                    : theme.colors.light[0],
                        })}
                        onClick={loginButtonHandler}
                    >
                        Login
                    </Button>
                </Group>
            </Container>
        </Header>
    );
};

export default PageHeader;

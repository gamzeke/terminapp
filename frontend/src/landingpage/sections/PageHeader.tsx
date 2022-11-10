import {
    Button,
    Container,
    Divider,
    Group,
    Header,
    Switch,
    Text,
    Title,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useCompanyContext } from '../../shared/context/CompanyContext';

const PageHeader = ({
    toggleCurrentTheme,
    toggleLanguage,
    currentLanguage,
    colorScheme,
    isLargeFontSize,
    toggleFontSize,
}: {
    toggleCurrentTheme: () => void;
    toggleLanguage: () => void;
    currentLanguage: string;
    colorScheme: string;
    isLargeFontSize: boolean;
    toggleFontSize: () => void;
}) => {
    const { company, ...rest } = useCompanyContext();
    const navigate = useNavigate();

    const loginButtonHandler = () => {
        navigate('auth');
    };

    const appointmentButtonHandler = () => {
        navigate('scheduler');
    };

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
                    <Title
                        order={3}
                        sx={theme => ({
                            color: theme.colors.main[4],
                        })}
                    >
                        {company.companyName}
                    </Title>
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
                        onLabel={<Text size="sm">English</Text>}
                        offLabel={<Text size="sm">Deutsch</Text>}
                        checked={currentLanguage === 'german' ? false : true}
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
                        onLabel={<IconSun size={16} stroke={2.5} />}
                        offLabel={<IconMoonStars size={16} stroke={2.5} />}
                        checked={colorScheme === 'dark' ? false : true}
                        onClick={() => {
                            toggleCurrentTheme();
                        }}
                    />
                    <Switch
                        size="md"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onLabel={<Text size="sm">Schrift (Fett)</Text>}
                        offLabel={<Text size="sm">Schrift (Normal)</Text>}
                        checked={isLargeFontSize}
                        onClick={() => {
                            toggleFontSize();
                        }}
                    />
                    <Divider orientation="vertical" />
                    <Button
                        sx={theme => ({
                            height: 30,
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

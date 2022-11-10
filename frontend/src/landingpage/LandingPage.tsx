import {
    ActionIcon,
    Box,
    Container,
    Group,
    MantineProvider,
    Paper,
    Space,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
} from '@tabler/icons';
import { useEffect, useState } from 'react';
import { useCompanyContext } from '../shared/context/CompanyContext';
import {
    landingPageDarkTheme,
    landingPageDarkWithLargeFontsizeTheme,
    landingPageLightTheme,
    landingPageLightWithLargeFontsizeTheme,
} from '../shared/theme/theme';
import ContactUs from './sections/ContactUs';
import { FAQ } from './sections/FAQ';
import PageFooter from './sections/PageFooter';
import PageHeader from './sections/PageHeader';
import Products from './sections/Products';

const LandingPage = () => {
    const { company, ...rest } = useCompanyContext();
    const [showFAQs, setShowFAQs] = useState(true);
    const [showProducts, setShowProducts] = useState(true);
    const [currentTheme, setCurrentTheme] = useState(landingPageLightTheme);
    const [colorScheme, setColorScheme] = useLocalStorage({
        key: 'color-scheme',
        defaultValue: 'light',
    });
    const [isLargeFontSize, setIsLargeFontSize] = useLocalStorage({
        key: 'is-large-font-size',
        defaultValue: false,
    });
    const [currentLanguage, setCurrentLanguage] = useLocalStorage({
        key: 'language',
        defaultValue: 'german',
    });
    const toggleCurrentTheme = () => {
        if (colorScheme === 'light') {
            setColorScheme('dark');
        } else {
            setColorScheme('light');
        }
    };

    useEffect(() => {
        if (colorScheme === 'light' && isLargeFontSize) {
            setCurrentTheme(landingPageLightWithLargeFontsizeTheme);
        } else if (colorScheme === 'light' && !isLargeFontSize) {
            setCurrentTheme(landingPageLightTheme);
        } else if (colorScheme === 'dark' && isLargeFontSize) {
            setCurrentTheme(landingPageDarkWithLargeFontsizeTheme);
        } else {
            setCurrentTheme(landingPageDarkTheme);
        }
    }, [colorScheme, isLargeFontSize]);

    const toggleLanguage = () => {
        currentLanguage === 'german'
            ? setCurrentLanguage('english')
            : setCurrentLanguage('german');
    };

    const toggleFontSize = () => {
        setIsLargeFontSize(!isLargeFontSize);
    };

    return (
        <MantineProvider theme={currentTheme}>
            <Box
                sx={theme => ({
                    backgroundColor: theme.colors.main[3],
                    height: '100vh',
                })}
            >
                <PageHeader
                    toggleLanguage={toggleLanguage}
                    currentLanguage={currentLanguage}
                    toggleCurrentTheme={toggleCurrentTheme}
                    colorScheme={colorScheme}
                    isLargeFontSize={isLargeFontSize}
                    toggleFontSize={toggleFontSize}
                />
                {company.welcomeText && (
                    <Container
                        id="welcome-section"
                        sx={theme => ({
                            backgroundColor: theme.colors.main[3],
                        })}
                    >
                        <Title
                            order={1}
                            align="center"
                            sx={theme => ({
                                color: theme.colors.main[4],
                            })}
                        >
                            {currentLanguage === 'german'
                                ? 'Herzlich Willkommen'
                                : 'Welcome'}
                        </Title>
                        <Text
                            mt="xl"
                            align="justify"
                            sx={theme => ({
                                color: theme.colors.main[4],
                                fontSize: theme.fontSizes.md,
                            })}
                        >
                            {company.welcomeText}
                        </Text>
                    </Container>
                )}
                {showProducts && (
                    <Container
                        id="service-section"
                        pt="xl"
                        sx={theme => ({
                            backgroundColor: theme.colors.main[3],
                        })}
                    >
                        <Title
                            order={2}
                            mb="lg"
                            sx={theme => ({
                                color: theme.colors.main[4],
                            })}
                        >
                            {currentLanguage === 'german'
                                ? 'Unsere Leistungen'
                                : 'Our Services'}
                        </Title>
                        <Products
                            setShowProducts={setShowProducts}
                            currentLanguage={currentLanguage}
                        />
                    </Container>
                )}
                <Space mb={100} />
                {showFAQs && (
                    <Container
                        id="faq-section"
                        pt="xl"
                        sx={theme => ({
                            backgroundColor: theme.colors.main[3],
                        })}
                    >
                        <Title
                            order={2}
                            mb="lg"
                            sx={theme => ({
                                color: theme.colors.main[4],
                            })}
                        >
                            {currentLanguage === 'german'
                                ? 'Häufig gestellte Fragen'
                                : 'Frequently asked questions'}
                        </Title>
                        <FAQ setShowFAQs={setShowFAQs} />
                    </Container>
                )}
                <Space mb={100} />
                {(company.tikTokLink ||
                    company.instagramLink ||
                    company.facebookLink ||
                    company.youtubeLink) && (
                    <Container
                        id="socialmedia-section"
                        pt="xl"
                        sx={theme => ({
                            backgroundColor: theme.colors.main[3],
                        })}
                    >
                        <Title
                            order={2}
                            mb="lg"
                            sx={theme => ({
                                color: theme.colors.main[4],
                            })}
                        >
                            {currentLanguage === 'german'
                                ? 'Folgen Sie in den Social Media'
                                : 'Follow us on social media'}
                        </Title>
                        <Group spacing={0} position="apart" noWrap>
                            {company.facebookLink && (
                                <Group>
                                    <ActionIcon
                                        size="xl"
                                        component="a"
                                        href={company.facebookLink}
                                        target="_blank"
                                    >
                                        <IconBrandFacebook
                                            size={32}
                                            color="blue"
                                        />
                                    </ActionIcon>
                                    <Text
                                        sx={theme => ({
                                            color: theme.colors.main[4],
                                        })}
                                    >
                                        Facebook
                                    </Text>
                                </Group>
                            )}
                            {company.instagramLink && (
                                <Group>
                                    <ActionIcon
                                        size="xl"
                                        component="a"
                                        href={company.instagramLink}
                                        target="_blank"
                                    >
                                        <IconBrandInstagram
                                            size={32}
                                            color="brown"
                                        />
                                    </ActionIcon>
                                    <Text
                                        sx={theme => ({
                                            color: theme.colors.main[4],
                                        })}
                                    >
                                        Instagram
                                    </Text>
                                </Group>
                            )}
                            {company.youtubeLink && (
                                <Group>
                                    <ActionIcon
                                        size="xl"
                                        component="a"
                                        href={company.youtubeLink}
                                        target="_blank"
                                    >
                                        <IconBrandYoutube
                                            size={32}
                                            color="red"
                                        />
                                    </ActionIcon>
                                    <Text
                                        sx={theme => ({
                                            color: theme.colors.main[4],
                                        })}
                                    >
                                        Youtube
                                    </Text>
                                </Group>
                            )}
                            {company.tikTokLink && (
                                <Group>
                                    <ActionIcon
                                        size="xl"
                                        component="a"
                                        href={company.tikTokLink}
                                        target="_blank"
                                    >
                                        <IconBrandTiktok
                                            size={32}
                                            color="green"
                                        />
                                    </ActionIcon>
                                    <Text
                                        sx={theme => ({
                                            color: theme.colors.main[4],
                                        })}
                                    >
                                        TikTok
                                    </Text>
                                </Group>
                            )}
                        </Group>
                    </Container>
                )}
                <Space mb={100} />
                {(company.mondayOpen ||
                    company.mondayClose ||
                    company.tuesdayOpen ||
                    company.tuesdayClose ||
                    company.wednesdayOpen ||
                    company.wednesdayClose ||
                    company.thursdayOpen ||
                    company.thursdayClose ||
                    company.fridayOpen ||
                    company.fridayClose ||
                    company.saturdayOpen ||
                    company.saturdayClose) && (
                    <Container
                        pt="xl"
                        sx={theme => ({
                            backgroundColor: theme.colors.main[3],
                        })}
                    >
                        <Title
                            order={2}
                            mb="lg"
                            sx={theme => ({
                                color: theme.colors.main[4],
                            })}
                        >
                            {currentLanguage === 'german'
                                ? 'Unsere Öffnungszeiten'
                                : 'Our business hours'}
                        </Title>
                        <Group position="apart">
                            <Paper shadow="xs" p="md">
                                {company.mondayOpen && company.mondayClose ? (
                                    <Stack>
                                        <Title order={4}>
                                            {currentLanguage === 'german'
                                                ? 'Montag'
                                                : 'Monday'}
                                        </Title>
                                        <Title order={6}>
                                            {company.mondayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.mondayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                ) + ' bis '}
                                            {company.mondayClose
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.mondayClose?.toLocaleTimeString()
                                                        .length - 3
                                                )}
                                        </Title>
                                    </Stack>
                                ) : null}
                            </Paper>
                            {company.tuesdayOpen && company.tuesdayClose ? (
                                <Paper shadow="xs" p="md">
                                    <Stack>
                                        <Title
                                            order={4}
                                            sx={theme => ({
                                                color: theme.colors.main[4],
                                            })}
                                        >
                                            {currentLanguage === 'german'
                                                ? 'Dienstag'
                                                : 'Tuesday'}
                                        </Title>
                                        <Title order={6}>
                                            {company.tuesdayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.tuesdayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                ) + ' bis '}
                                            {company.tuesdayClose
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.tuesdayClose?.toLocaleTimeString()
                                                        .length - 3
                                                )}
                                        </Title>
                                    </Stack>
                                </Paper>
                            ) : null}
                            {company.wednesdayOpen && company.wednesdayClose ? (
                                <Paper shadow="xs" p="md">
                                    <Stack>
                                        <Title
                                            order={4}
                                            sx={theme => ({
                                                color: theme.colors.main[4],
                                            })}
                                        >
                                            {currentLanguage === 'german'
                                                ? 'Mittwoch'
                                                : 'Wednesday'}
                                        </Title>
                                        <Title order={6}>
                                            {company.wednesdayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.wednesdayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                ) + ' bis '}
                                            {company.wednesdayClose
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.wednesdayClose?.toLocaleTimeString()
                                                        .length - 3
                                                )}
                                        </Title>
                                    </Stack>
                                </Paper>
                            ) : null}
                            {company.thursdayOpen && company.thursdayClose ? (
                                <Paper shadow="xs" p="md">
                                    <Stack>
                                        <Title
                                            order={4}
                                            sx={theme => ({
                                                color: theme.colors.main[4],
                                            })}
                                        >
                                            {currentLanguage === 'german'
                                                ? 'Donnerstag'
                                                : 'Thursday'}
                                        </Title>
                                        <Title order={6}>
                                            {company.thursdayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.thursdayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                ) + ' bis '}
                                            {company.thursdayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.thursdayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                )}
                                        </Title>
                                    </Stack>
                                </Paper>
                            ) : null}
                            {company.fridayOpen && company.fridayClose ? (
                                <Paper shadow="xs" p="md">
                                    <Stack>
                                        <Title
                                            order={4}
                                            sx={theme => ({
                                                color: theme.colors.main[4],
                                            })}
                                        >
                                            {currentLanguage === 'german'
                                                ? 'Freitag'
                                                : 'Friday'}
                                        </Title>
                                        <Title order={6}>
                                            {company.fridayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.fridayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                ) + ' bis '}
                                            {company.fridayClose
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.fridayClose?.toLocaleTimeString()
                                                        .length - 3
                                                )}
                                        </Title>
                                    </Stack>
                                </Paper>
                            ) : null}
                            {company.saturdayClose && company.saturdayOpen ? (
                                <Paper shadow="xs" p="md">
                                    <Stack>
                                        <Title
                                            order={4}
                                            sx={theme => ({
                                                color: theme.colors.main[4],
                                            })}
                                        >
                                            {currentLanguage === 'german'
                                                ? 'Samstag'
                                                : 'Saturday'}
                                        </Title>
                                        <Title order={6}>
                                            {company.saturdayOpen
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.saturdayOpen?.toLocaleTimeString()
                                                        .length - 3
                                                ) + ' bis '}
                                            {company.saturdayClose
                                                ?.toLocaleTimeString()
                                                .slice(
                                                    0,
                                                    company.saturdayClose?.toLocaleTimeString()
                                                        .length - 3
                                                )}
                                        </Title>
                                    </Stack>
                                </Paper>
                            ) : null}
                        </Group>
                    </Container>
                )}
                <Space mb={100} />
                {(company.email || company.phone) && (
                    <Container
                        id="contact-section"
                        pt="xl"
                        sx={theme => ({
                            backgroundColor: theme.colors.main[3],
                        })}
                    >
                        <Title
                            order={2}
                            mb="lg"
                            sx={theme => ({
                                color: theme.colors.main[4],
                            })}
                        >
                            {currentLanguage === 'german'
                                ? 'Kontaktieren Sie uns einfach'
                                : 'Please feel free to contact us'}
                        </Title>
                        <Space mb={30} />
                        <ContactUs currentLanguage={currentLanguage} />
                        <Space mb={100} />
                    </Container>
                )}
                <PageFooter />
            </Box>
        </MantineProvider>
    );
};

export default LandingPage;

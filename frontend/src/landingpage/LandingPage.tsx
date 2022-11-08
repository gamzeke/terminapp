import {
    ActionIcon,
    Container,
    Group,
    Paper,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
} from '@tabler/icons';
import { useState } from 'react';
import { useCompanyContext } from '../shared/context/CompanyContext';
import ContactUs from './sections/ContactUs';
import { FAQ } from './sections/FAQ';
import PageFooter from './sections/PageFooter';
import PageHeader from './sections/PageHeader';
import Products from './sections/Products';

const LandingPage = () => {
    const { company, ...rest } = useCompanyContext();

    const [showFAQs, setShowFAQs] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    return (
        <>
            <PageHeader />

            <Container id="welcome-section">
                <Title order={1} align="center">
                    Herzlich Willkommen
                </Title>
                <Text mt="xl" align="justify">
                    {company.welcomeText}
                </Text>
            </Container>

            {showProducts && (
                <Container id="service-section" pt="xl">
                    <Title order={2} mb="lg">
                        Unsere Leistungen
                    </Title>
                    <Products setShowProducts={setShowProducts} />
                </Container>
            )}

            {showFAQs && (
                <Container id="faq-section" pt="xl">
                    <Title order={2} mb="lg">
                        Häufig gestellte Fragen
                    </Title>
                    <FAQ setShowFAQs={setShowFAQs} />
                </Container>
            )}

            <Container id="socialmedia-section" pt="xl">
                <Title order={2} mb="lg">
                    Folgen Sie in den Social Media
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
                                <IconBrandFacebook size={32} color="blue" />
                            </ActionIcon>
                            <Text>Facebook</Text>
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
                                <IconBrandInstagram size={32} color="brown" />
                            </ActionIcon>
                            <Text>Instagram</Text>
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
                                <IconBrandYoutube size={32} color="red" />
                            </ActionIcon>
                            <Text>Youtube</Text>
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
                                <IconBrandTiktok size={32} color="green" />
                            </ActionIcon>
                            <Text>TikTok</Text>
                        </Group>
                    )}
                </Group>
            </Container>

            <Container id="contact-section" pt="xl">
                <Title order={2} mb="lg">
                    Unsere Öffnungszeiten
                </Title>
                <Group position="apart">
                    <Paper shadow="xs" p="md">
                        {company.mondayOpen && company.mondayClose ? (
                            <Stack>
                                <Title order={4}>Montag</Title>
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
                                <Title order={4}>Dienstag</Title>
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
                                <Title order={4}>Mittwoch</Title>
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
                                <Title order={4}>Donnerstag</Title>
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
                                <Title order={4}>Freitag</Title>
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
                                <Title order={4}>Samstag</Title>
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

            <Container id="contact-section" pt="xl">
                <Title order={2} mb="lg">
                    Kontaktieren Sie uns einfach
                </Title>
                <ContactUs />
            </Container>

            <PageFooter />
        </>
    );
};

export default LandingPage;

import { ActionIcon, Container, Group, SimpleGrid, Skeleton, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import { BrandInstagram, BrandTwitter, BrandYoutube, BrandTiktok, BrandFacebook } from 'tabler-icons-react'
import { useCompanyContext } from '../shared/context/CompanyContext'
import ContactUs from './sections/ContactUs'
import { FAQ } from './sections/FAQ'
import PageFooter from './sections/PageFooter'
import PageHeader from './sections/PageHeader'
import { ServiceCard } from './sections/ServiceCard'

const LandingPage = () => {
    const { company, ...rest } = useCompanyContext();

    return (
        <>
            <PageHeader />

            <Container id="welcome-section">
                <Title order={1} align="center">Herzlich Willkommen</Title>
                <Text mt="xl" align="justify">
                    {company.welcomeText}
                </Text>
            </Container>

            <Container id="service-section" pt="xl">
                <Title order={2} mb="lg">Unsere Leistungen</Title>
                <SimpleGrid cols={4} spacing="xs">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </SimpleGrid>
            </Container>

            <Container id="faq-section" pt="xl">
                <Title order={2} mb="lg">Häufig gestellte Fragen</Title>
                <FAQ />
            </Container>

            <Container id="contact-section" pt="xl">
                <Title order={2} mb="lg">Kontaktieren Sie uns einfach</Title>
                <ContactUs />
            </Container>

            <Container id="socialmedia-section" pt="xl">
                <Group spacing={0} position="apart" noWrap>
                    {
                        company.facebookLink && <Group>
                            <ActionIcon size="xl" component="a"
                                href={company.facebookLink}
                                target="_blank">
                                <BrandFacebook size={32} color="blue" />
                            </ActionIcon>
                            <Text>Facebook</Text>
                        </Group>
                    }
                    {
                        company.instagramLink && <Group>
                            <ActionIcon size="xl" component="a"
                                href={company.instagramLink}
                                target="_blank">
                                <BrandInstagram size={32} color="brown" />
                            </ActionIcon>
                            <Text>Instagram</Text>
                        </Group>
                    }
                    {

                        company.youtubeLink && <Group>
                            <ActionIcon size="xl" component="a"
                                href={company.youtubeLink}
                                target="_blank">
                                <BrandYoutube size={32} color="red" />
                            </ActionIcon>
                            <Text>Youtube</Text>
                        </Group>
                    }
                    {
                        company.tikTokLink && <Group>
                            <ActionIcon size="xl" component="a"
                                href={company.tikTokLink}
                                target="_blank">
                                <BrandTiktok size={32} color="green" />
                            </ActionIcon>
                            <Text>TikTok</Text>
                        </Group>
                    }
                </Group>
            </Container>

            <PageFooter />
        </>
    )
}

export default LandingPage
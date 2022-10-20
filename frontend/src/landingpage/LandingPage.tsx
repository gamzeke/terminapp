import { ActionIcon, Container, Group, SimpleGrid, Skeleton, Text, Title } from '@mantine/core'
import { BrandInstagram, BrandTwitter, BrandYoutube, BrandTiktok } from 'tabler-icons-react'
import ContactUs from './sections/ContactUs'
import { FAQ } from './sections/FAQ'
import PageFooter from './sections/PageFooter'
import PageHeader from './sections/PageHeader'
import { ServiceCard } from './sections/ServiceCard'

const LandingPage = () => {
    return (
        <>
            <PageHeader />

            <Container id="welcome-section">
                <Title order={1} align="center">Herzlich Willkommen</Title>
                <Text mt="xl" align="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut possimus vel deleniti eveniet! Veniam, tempora exercitationem! Et dolorem similique, esse optio sed placeat ea itaque asperiores soluta exercitationem dolorum architecto.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut possimus vel deleniti eveniet! Veniam, tempora exercitationem! Et dolorem similique, esse optio sed placeat ea itaque asperiores soluta exercitationem dolorum architecto.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut possimus vel deleniti eveniet! Veniam, tempora exercitationem! Et dolorem similique, esse optio sed placeat ea itaque asperiores soluta exercitationem dolorum architecto.
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

            <Container id="socialmedia-section" pt="xl">
                <Title order={2} mb="lg">Wir sind auf den folgenden Sozialen Medien</Title>
                <Group spacing={0} position="center" noWrap>
                    <ActionIcon size="xl">
                        <BrandInstagram size={32} />
                    </ActionIcon>
                    <ActionIcon size="xl">
                        <BrandTwitter size={32} />
                    </ActionIcon>
                    <ActionIcon size="xl">
                        <BrandYoutube size={32} />
                    </ActionIcon>
                    <ActionIcon size="xl">
                        <BrandTiktok size={32} />
                    </ActionIcon>
                </Group>
            </Container>

            <Container id="faq-section" pt="xl">
                <Title order={2} mb="lg">Häufig gestellte Fragen</Title>
                <FAQ />
            </Container>

            <Container id="review-section" pt="xl">
                <Title order={2} mb="lg">Das sagen unsere Kunden über uns</Title>
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
            </Container>

            <Container id="contact-section" pt="xl">
                <Title order={2} mb="lg">Kontaktieren Sie uns einfach</Title>
                <ContactUs />
            </Container>

            <PageFooter />
        </>
    )
}

export default LandingPage
import { Container, SimpleGrid, Skeleton, Title } from '@mantine/core'
import { ContactUs } from './ContactUs'
import { FAQ } from './FAQ'
import { LandingPageFooter } from './LandingPageFooter'
import { LandingPageHeader } from './LandingPageHeader'
import { ServiceCard } from './ServiceCard'

const Landingpage = () => {
    return (
        <>
            <LandingPageHeader />

            <Container>
                <Title order={2}>Wer sind wir?</Title>
                <>
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    TODO: Über uns
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                </>
            </Container>

            <Container>
                <Title order={2}>Unser Service</Title>
                <SimpleGrid cols={4} spacing="md">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </SimpleGrid>
            </Container>

            <Container>
                <Title order={2}>Gallerie</Title>
                <>
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    TODO: Bilder
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                </>
            </Container>

            <Container>
                <Title order={2}>Social Media</Title>
                <>
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    TODO: Insta, tiktok, Youtube etc.
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                </>
            </Container>

            <Container>
                <Title order={2}>FAQ</Title>
                <FAQ />
            </Container>

            <Container>
                <Title order={2}>Kundenmeinungen</Title>
                <>
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    TODO: Refs von Kunden
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                </>
            </Container>

            <Container>
                <Title order={2}>Kontakt</Title>
                <ContactUs />
            </Container>

            <LandingPageFooter />
        </>
    )
}

export default Landingpage
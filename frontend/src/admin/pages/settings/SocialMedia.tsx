import { Group, Paper, Stack, TextInput, Title } from '@mantine/core';
import { BrandFacebook, BrandInstagram, BrandTiktok, BrandYoutube, Home2 as Home } from 'tabler-icons-react';
import { useBackOfficeContext } from '../../../shared/context/BackOfficeContext';

const SocialMedia = () => {
    const { company, updateCompany } = useBackOfficeContext()

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position='apart'>
                    <Title order={3}>Social Media</Title>
                </Group>
                <TextInput
                    icon={<Home />}
                    value={company.homepageLink}
                    onChange={(event) => { updateCompany("homepageLink", event.currentTarget.value) }}
                    label="Homepage"
                    placeholder='https://www.muster.de'
                    variant="filled" />
                <TextInput
                    icon={<BrandInstagram />}
                    value={company.instagramLink}
                    onChange={(event) => { updateCompany("instagramLink", event.currentTarget.value) }}
                    label="Instagram"
                    placeholder='https://www.muster.de'
                    variant="filled" />
                <TextInput
                    icon={<BrandFacebook />}
                    label="Facebook"
                    value={company.facebookLink}
                    placeholder='https://www.muster.de'
                    onChange={(event) => { updateCompany("facebookLink", event.currentTarget.value) }}
                    variant="filled" />
                <TextInput
                    icon={<BrandTiktok />}
                    label="TikTok"
                    value={company.tikTokLink}
                    placeholder='https://www.muster.de'
                    onChange={(event) => { updateCompany("tikTokLink", event.currentTarget.value) }}
                    variant="filled" />
                <TextInput
                    value={company.youtubeLink}
                    onChange={(event) => { updateCompany("youtubeLink", event.currentTarget.value) }}
                    icon={<BrandYoutube />}
                    placeholder='https://www.muster.de'
                    label="Youtube"
                    variant="filled" />
            </Stack>
        </Paper>
    )
}

export default SocialMedia
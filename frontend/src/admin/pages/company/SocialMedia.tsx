import { Group, Paper, Stack, TextInput, Title } from '@mantine/core';
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
    IconHome,
} from '@tabler/icons';
import { useCompanyContext } from '../../../shared/context/CompanyContext';

const SocialMedia = () => {
    const { company, updateCompany } = useCompanyContext();

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position="apart">
                    <Title order={3}>Social Media</Title>
                </Group>
                <TextInput
                    icon={<IconHome />}
                    value={company.homepageLink}
                    onChange={event => {
                        updateCompany(
                            'homepageLink',
                            event.currentTarget.value
                        );
                    }}
                    label="Homepage"
                    placeholder="https://www.muster.de"
                    variant="filled"
                />
                <TextInput
                    icon={<IconBrandInstagram />}
                    value={company.instagramLink}
                    onChange={event => {
                        updateCompany(
                            'instagramLink',
                            event.currentTarget.value
                        );
                    }}
                    label="Instagram"
                    placeholder="https://www.muster.de"
                    variant="filled"
                />
                <TextInput
                    icon={<IconBrandFacebook />}
                    label="Facebook"
                    value={company.facebookLink}
                    placeholder="https://www.muster.de"
                    onChange={event => {
                        updateCompany(
                            'facebookLink',
                            event.currentTarget.value
                        );
                    }}
                    variant="filled"
                />
                <TextInput
                    icon={<IconBrandTiktok />}
                    label="TikTok"
                    value={company.tikTokLink}
                    placeholder="https://www.muster.de"
                    onChange={event => {
                        updateCompany('tikTokLink', event.currentTarget.value);
                    }}
                    variant="filled"
                />
                <TextInput
                    value={company.youtubeLink}
                    onChange={event => {
                        updateCompany('youtubeLink', event.currentTarget.value);
                    }}
                    icon={<IconBrandYoutube />}
                    placeholder="https://www.muster.de"
                    label="Youtube"
                    variant="filled"
                />
            </Stack>
        </Paper>
    );
};

export default SocialMedia;

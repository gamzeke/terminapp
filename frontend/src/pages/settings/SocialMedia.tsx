import { Title, TextInput, Paper } from '@mantine/core'
import { BrandFacebook, BrandInstagram, BrandTiktok, BrandYoutube, Home, Home2 } from 'tabler-icons-react'

const SocialMedia = () => {
    return (
        <Paper shadow="sm" p="lg">
            <Title order={3}>Social Media</Title>
            <TextInput icon={<Home2 />} label="Homepage" variant="filled" />
            <TextInput icon={<BrandInstagram />} label="Instagram" variant="filled" />
            <TextInput icon={<BrandFacebook />} label="Facebook" variant="filled" />
            <TextInput icon={<BrandTiktok />} label="TikTok" variant="filled" />
            <TextInput icon={<BrandYoutube />} label="Youtube" variant="filled" />
        </Paper>
    )
}

export default SocialMedia
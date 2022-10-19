import { Button, Group, Paper, TextInput, Title, Stack } from '@mantine/core'
import { useState } from 'react';
import { BrandFacebook, BrandInstagram, BrandTiktok, BrandYoutube, Home2 as Home } from 'tabler-icons-react'

const SocialMedia = () => {

    const [homepage, setHomePage] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [youtube, setYoutube] = useState("");

    const saveChangesHandler = () => {
        //TODO-MMUEJDE: Implement me 
    }

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position='apart'>
                    <Title order={3}>Social Media</Title>
                    <Button onClick={saveChangesHandler} size='xs'>Speichern</Button>
                </Group>
                <TextInput
                    icon={<Home />}
                    value={homepage}
                    onChange={(event) => { setHomePage(event.currentTarget.value) }}
                    label="Homepage"
                    placeholder='https://www.muster.de'
                    variant="filled" />
                <TextInput
                    icon={<BrandInstagram />}
                    value={instagram}
                    onChange={(event) => { setInstagram(event.currentTarget.value) }}
                    label="Instagram"
                    placeholder='https://www.muster.de'
                    variant="filled" />
                <TextInput
                    icon={<BrandFacebook />}
                    label="Facebook"
                    value={facebook}
                    placeholder='https://www.muster.de'
                    onChange={(event) => { setFacebook(event.currentTarget.value) }}
                    variant="filled" />
                <TextInput
                    icon={<BrandTiktok />}
                    label="TikTok"
                    value={tiktok}
                    placeholder='https://www.muster.de'
                    onChange={(event) => { setTiktok(event.currentTarget.value) }}
                    variant="filled" />
                <TextInput
                    value={youtube}
                    onChange={(event) => { setYoutube(event.currentTarget.value) }}
                    icon={<BrandYoutube />}
                    placeholder='https://www.muster.de'
                    label="Youtube"
                    variant="filled" />
            </Stack>
        </Paper>
    )
}

export default SocialMedia
import { Image, Paper, SimpleGrid, Skeleton } from '@mantine/core'

const GalleryView = () => {
    const images = [
        "https://picsum.photos/id/200/200",
        "https://picsum.photos/id/201/200",
        "https://picsum.photos/id/202/200",
        "https://picsum.photos/id/203/200",
        "https://picsum.photos/id/223/200",
        "https://picsum.photos/id/215/200",
        "https://picsum.photos/id/206/200",
    ]
    return (
        <SimpleGrid cols={4}>
            {images.map((link) => {
                return <Paper>
                    <Image src={link} />
                </Paper>
            })}
        </SimpleGrid>
    )
}

export default GalleryView
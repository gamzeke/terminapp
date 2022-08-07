import { SimpleGrid, Skeleton, Title } from '@mantine/core'
import { StatusCard } from '../dashboard/StatusCard'

const FAQView = () => {
    return (
        <SimpleGrid cols={1}>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
            <Skeleton visible={true}>
                <StatusCard />
            </Skeleton>
        </SimpleGrid>
    )
}

export default FAQView
import { SimpleGrid, Skeleton } from "@mantine/core"
import { StatusCard } from "../dashboard/StatusCard"

const RequestView = () => {
    return (
        <SimpleGrid cols={3}>
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

export default RequestView
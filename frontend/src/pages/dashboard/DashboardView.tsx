import { SimpleGrid, Skeleton } from '@mantine/core'
import NextAppointmentCard from './NextAppointmentCard'
import { StatusCard } from './StatusCard'

const DashboardView = () => {
    return (
        <SimpleGrid cols={2} spacing="sm">
            <NextAppointmentCard></NextAppointmentCard>
            <StatusCard />
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
        </SimpleGrid >
    )
}

export default DashboardView
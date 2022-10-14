import { SimpleGrid } from '@mantine/core'
import NextAppointmentCard from './NextAppointmentCard'
import { StatusCard } from './StatusCard'

const DashboardView = () => {
    return (
        <SimpleGrid cols={2} spacing="sm">
            <NextAppointmentCard/>
            <StatusCard />
        </SimpleGrid >
    )
}

export default DashboardView
import { SimpleGrid } from "@mantine/core"
import Address from "./Address"
import BusinessHours from "./BusinessHours"
import Company from "./Company"
import Services from "./Services"
import SocialMedia from "./SocialMedia"

const SettingsView = () => {
    return (
        <SimpleGrid cols={2} spacing="sm">
            <Company />
            <Address />
            <SocialMedia />
            <Services />
            <BusinessHours />
        </SimpleGrid>
    )
}

export default SettingsView
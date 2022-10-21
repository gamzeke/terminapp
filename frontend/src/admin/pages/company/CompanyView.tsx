import { Button, Group, SimpleGrid, Space } from "@mantine/core"
import { useBackOfficeContext } from "../../../shared/context/BackOfficeContext"
import Address from "./Address"
import BusinessHours from "./BusinessHours"
import Company from "./Company"
import Services from "./Services"
import SocialMedia from "./SocialMedia"

const CompanyView = () => {
    const { saveCompany, ...rest } = useBackOfficeContext()

    return (
        <>
            <Group position="right">
                <Button onClick={saveCompany}>Speichern</Button>
            </Group>
            <Space h="md" />
            <SimpleGrid cols={2} spacing="sm">
                <Company />
                <Address />
                <SocialMedia />
                <Services />
                <BusinessHours />
            </SimpleGrid>
        </>
    )
}

export default CompanyView
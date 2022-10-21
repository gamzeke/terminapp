import { Button, Group, Paper, SimpleGrid, Space, Title } from "@mantine/core"
import { useBackOfficeContext } from "../../../shared/context/CompanyContext"
import Address from "./Address"
import BusinessHours from "./BusinessHours"
import Company from "./Company"
import Products from "./Products"
import SocialMedia from "./SocialMedia"

const CompanyView = () => {
    const { saveCompany, ...rest } = useBackOfficeContext()

    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>
                        Geschäftsdaten
                    </Title>
                    <Button onClick={saveCompany}>Speichern</Button>
                </Group>
            </Paper>
            <Space h="md" />
            <SimpleGrid cols={3} spacing="sm">
                <Company />
                <Address />
                <SocialMedia />
                <Products />
                <BusinessHours />
            </SimpleGrid>
        </>
    )
}

export default CompanyView
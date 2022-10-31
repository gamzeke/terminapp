import { Center, Loader, SimpleGrid, Stack, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IService } from '../../shared/models/IService';
import ServiceCard from './ServiceCard';

const SERVICE_URL = 'http://localhost:8080/api/v1/products';

const Products = () => {
    const { isLoading, isFetching, error, data } = useQuery(
        ['landingpage-products'],
        () => axios.get(SERVICE_URL).then(res => res.data)
    );

    if (error) {
        return (
            <Center sx={{ height: '100%' }}>
                <Stack align="center">
                    <IconAlertCircle size={32} color="red" />
                    <Text>
                        Leider ist ein Fehler aufgetreten. Versuchen Sie es
                        später nochmal.
                    </Text>
                </Stack>
            </Center>
        );
    }

    if (isFetching || isLoading) {
        return (
            <Center sx={{ height: '100%' }}>
                <Loader size="xl" variant="bars" />
            </Center>
        );
    }

    return (
        <SimpleGrid cols={4} spacing="xs">
            {data.map((service: IService) => {
                return <ServiceCard {...service} key={service.id} />;
            })}
        </SimpleGrid>
    );
};

export default Products;

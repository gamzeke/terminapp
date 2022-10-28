import { Center, Loader, SimpleGrid, Stack, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FAQ_URL } from '../../admin/pages/faq/FAQView';
import { IService } from '../../shared/models/IService';
import { ServiceCard } from './ServiceCard';

const Products = () => {
    const { isLoading, isFetching, error, data } = useQuery(
        ['landingpage-products'],
        () => axios.get(FAQ_URL).then(res => res.data)
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
                return <ServiceCard key={service.id} />;
            })}
        </SimpleGrid>
    );
};

export default Products;

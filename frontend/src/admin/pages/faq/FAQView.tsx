import {
    Center,
    Group,
    Loader,
    Paper,
    SimpleGrid,
    Space,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IFAQ } from '.';
import AddFAQDialog from '../../../shared/dialogs/AddFAQDialog';
import FAQCard from './FAQCard';

const FAQView = () => {
    const { isLoading, isFetching, error, data } = useQuery(['faqs'], () =>
        axios.get('http://localhost:8080/api/v1/faqs').then(res => res.data)
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

    const createFAQButtonHandler = (question: string, answer: string) => {
        //TODO-MMUEJDE
    };

    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>FAQs</Title>
                    <AddFAQDialog
                        createFAQButtonHandler={createFAQButtonHandler}
                    />
                </Group>
            </Paper>
            <Space h="md" />
            <SimpleGrid cols={3}>
                {data.map((faq: IFAQ) => {
                    return <FAQCard key={faq.id} {...faq} />;
                })}
            </SimpleGrid>
        </>
    );
};

export default FAQView;

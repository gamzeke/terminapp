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
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle } from '@tabler/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { IFAQ } from '.';
import AddFAQDialog from '../../../shared/dialogs/AddFAQDialog';
import FAQCard from './FAQCard';

export const FAQ_URL = 'http://localhost:8080/api/v1/faqs';

const useCreateFAQ = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (newFaq: IFAQ) => {
            const faqJson = JSON.stringify(newFaq);
            return axios.post(FAQ_URL, faqJson, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        },
        {
            onError: (error, variables, context) => {
                showNotification({
                    title: '🫤',
                    color: 'red',
                    message: 'FAQ konnte nicht erstellt werden',
                });
            },
            onSuccess: newFAQ => {
                queryClient.invalidateQueries(['faqs']);
                showNotification({
                    title: '😊',
                    color: 'green',
                    message: 'FAQ konnte erfolgreich erstellt werden',
                });
            },
        }
    );
};

const FAQView = () => {
    const { mutate: faqMutate } = useCreateFAQ();

    const { isLoading, isFetching, error, data } = useQuery(['faqs'], () =>
        axios.get(FAQ_URL).then(res => res.data)
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
        const newFAQ: IFAQ = { question: question, answer: answer };
        faqMutate(newFAQ);
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
            {data.length ? (
                <SimpleGrid cols={3}>
                    {data.map((faq: IFAQ) => {
                        return <FAQCard key={faq.id} {...faq} />;
                    })}
                </SimpleGrid>
            ) : (
                <Center sx={{ height: '80%' }}>
                    <Text color="dimmed" size="lg">
                        Sie haben noch keine FAQs erstellt
                    </Text>
                </Center>
            )}
        </>
    );
};

export default FAQView;

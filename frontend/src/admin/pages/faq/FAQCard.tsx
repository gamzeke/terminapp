import { ActionIcon, Card, Group, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconTrashOff } from '@tabler/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { IFAQ } from '../../../shared/models/IFAQ';
import { FAQ_URL } from './FAQView';

const useDeleteFAQ = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: string) => {
            return axios.delete(FAQ_URL + `/${id}`, {
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
                    title: '😑',
                    color: 'red',
                    message: 'FAQ konnte nicht gelöscht werden',
                });
            },
            onSuccess: (data, variables, context) => {
                queryClient.invalidateQueries(['faqs']);
                showNotification({
                    title: '🗑',
                    color: 'green',
                    message: 'FAQ konnte erfolgreich gelöscht werden',
                });
            },
        }
    );
};

const FAQCard = ({
    question,
    answer,
    id,
    hideDeleteButton,
}: IFAQ & {
    hideDeleteButton?: boolean;
}) => {
    const { mutate: deleteFAQ } = useDeleteFAQ();

    const deleteFAQHandler = () => {
        if (id) {
            deleteFAQ(id);
        }
    };

    return (
        <Card shadow="xs" p="xs" radius="md" withBorder>
            <Title order={4}>{question}</Title>
            <Text size="sm" color="dimmed">
                {answer}
            </Text>
            {!hideDeleteButton && (
                <Group position="right">
                    <ActionIcon
                        size="xs"
                        color="red"
                        onClick={deleteFAQHandler}
                    >
                        <IconTrashOff />
                    </ActionIcon>
                </Group>
            )}
        </Card>
    );
};

export default FAQCard;

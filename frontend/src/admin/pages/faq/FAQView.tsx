import {
    Card,
    Group,
    Paper,
    SimpleGrid,
    Space,
    Text,
    Title,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorMessage from '../../../shared/ErrorMessage';

interface IFAQ {
    readonly id: number;
    title: string;
    content: string;
}

const FAQCard = ({ title, content }: IFAQ) => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text weight={500}>{title}</Text>
            <Text size="sm" color="dimmed">
                {content}
            </Text>
        </Card>
    );
};

const FAQView = () => {
    const { isLoading, isFetching, error, data } = useQuery(['faqs'], () =>
        axios.get('http://localhost:8080/api/v1/faqs').then(res => res.data)
    );

    if (error) {
        return (
            <ErrorMessage message="Die FAQs konnten nicht geladen werden." />
        );
    }

    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>FAQs</Title>
                </Group>
            </Paper>
            <Space h="md" />
            <>
                {isFetching || isLoading ? (
                    'IsLoading'
                ) : (
                    <SimpleGrid cols={3}>
                        {data.map((faq: IFAQ) => {
                            return <FAQCard key={faq.id} {...faq} />;
                        })}
                    </SimpleGrid>
                )}
            </>
        </>
    );
};

export default FAQView;

import { Card, Text } from '@mantine/core';
import { IFAQ } from '.';

const FAQCard = ({ question, answer, id }: IFAQ) => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text weight={500}>{question}</Text>
            <Text size="sm" color="dimmed">
                {answer}
            </Text>
        </Card>
    );
};

export default FAQCard;

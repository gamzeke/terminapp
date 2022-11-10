import {
    Center,
    createStyles,
    SimpleGrid,
    Skeleton,
    Stack,
    Text,
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import FAQCard from '../../admin/pages/faq/FAQCard';
import { FAQ_URL } from '../../admin/pages/faq/FAQView';
import { IFAQ } from '../../shared/models/IFAQ';

const useStyles = createStyles((theme, _params, getRef) => {
    const control = getRef('control');

    return {
        wrapper: {
            paddingTop: theme.spacing.xl * 2,
            paddingBottom: theme.spacing.xl * 2,
            minHeight: 650,
        },

        title: {
            fontWeight: 400,
            marginBottom: theme.spacing.xl * 1.5,
        },

        control: {
            ref: control,

            '&:hover': {
                backgroundColor: 'transparent',
            },
        },

        item: {
            borderRadius: theme.radius.md,
            marginBottom: theme.spacing.lg,

            border: `1px solid ${
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[3]
                    : theme.colors.gray[3]
            }`,
        },

        itemOpened: {
            [`& .${control}`]: {
                color: theme.colors[theme.primaryColor][
                    theme.colorScheme === 'dark' ? 4 : 6
                ],
            },
        },
    };
});

export function FAQ({
    setShowFAQs,
}: {
    setShowFAQs: Dispatch<SetStateAction<boolean>>;
}) {
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
            <>
                <Skeleton height={16} radius="xl" mt={16} />
                <Skeleton height={16} radius="xl" mt={16} />
                <Skeleton height={16} radius="xl" mt={16} />
                <Skeleton height={16} radius="xl" mt={16} />
                <Skeleton height={16} radius="xl" mt={16} />
                <Skeleton height={16} radius="xl" mt={16} />
            </>
        );
    }

    if (data.length) {
        setShowFAQs(true);
    } else {
        setShowFAQs(false);
    }

    return (
        <SimpleGrid>
            {data.map((faq: IFAQ) => {
                return <FAQCard key={faq.id} {...faq} hideDeleteButton />;
            })}
        </SimpleGrid>
    );
}

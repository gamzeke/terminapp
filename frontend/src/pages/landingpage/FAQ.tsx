import React from 'react';
import { Container, Title, Accordion, createStyles, Text } from '@mantine/core';

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

            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
                }`,
        },

        itemOpened: {
            [`& .${control}`]: {
                color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
            },
        },
    };
});

export function FAQ() {
    const { classes } = useStyles();
    return (
        <Container size="sm" className={classes.wrapper}>
            <Text>"How can I reset my password?"</Text>
            <Text>"Can I create more that one account?"</Text>
            <Text>"Do you store credit card information securely?"</Text>
            <Text>"What payment systems to you work with?"</Text>
            <Text>"How can I subscribe to monthly newsletter?"</Text>
        </Container>
    );
}
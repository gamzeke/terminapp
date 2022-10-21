import {
    Badge,
    Button,
    Card,
    Group,
    Image,
    Paper,
    Text,
    useMantineTheme,
} from '@mantine/core';

type CustomerCardProps = {
    name: string;
    firstContact: string;
};

const CustomerCard = (props: CustomerCardProps) => {
    const theme = useMantineTheme();

    const secondaryColor =
        theme.colorScheme === 'dark'
            ? theme.colors.dark[1]
            : theme.colors.gray[7];

    return (
        <div style={{ width: 340, margin: 'auto' }}>
            <Paper shadow="sm" p="lg">
                <Text weight={500}>Name: {props.name}</Text>
                <Text weight={500}>E-Mail: {props.name}</Text>
                <Text weight={500}>Telefon: {props.name}</Text>
                <Text weight={500}>Erstkontakt: {props.firstContact} </Text>
            </Paper>
        </div>
    );
};

export default CustomerCard;

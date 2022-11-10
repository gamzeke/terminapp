import {
    ActionIcon,
    Center,
    Group,
    Loader,
    Paper,
    Stack,
    Table,
    Text,
    Title,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle, IconTrash } from '@tabler/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import AddServiceDialog from '../../../shared/dialogs/AddServiceDialog';
import { IService } from '../../../shared/models/IService';

const SERVICE_URL = 'http://localhost:8080/api/v1/products';

const useDeleteService = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: string) => {
            return axios.delete(SERVICE_URL + `/${id}`, {
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
                    title: 'Fehler',
                    color: 'red',
                    message: 'Service konnte nicht gelöscht werden',
                });
            },
            onSuccess: newService => {
                queryClient.invalidateQueries(['landingpage-products']);
                showNotification({
                    title: 'Erfolgreich',
                    color: 'green',
                    message: 'Service konnte erfolgreich gelöscht werden',
                });
            },
        }
    );
};

const useCreateService = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (newService: IService) => {
            const serviceJson = JSON.stringify(newService);
            return axios.post(SERVICE_URL, serviceJson, {
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
                    title: 'Fehler',
                    color: 'red',
                    message: 'Service konnte nicht erstellt werden',
                });
            },
            onSuccess: newService => {
                queryClient.invalidateQueries(['landingpage-products']);
                showNotification({
                    title: 'Erfolgreich',
                    color: 'green',
                    message: 'Service konnte erfolgreich erstellt werden',
                });
            },
        }
    );
};

const Services = () => {
    const { mutate: serviceMutate } = useCreateService();
    const { mutate: deleteService } = useDeleteService();

    const { data, error, isLoading, isFetching } = useQuery(
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

    const deleteServiceHandler = (id: string) => {
        deleteService(id);
    };

    const createServiceButtonHandler = (
        name: string,
        description: string,
        price: string
    ) => {
        const newService: IService = {
            name: name,
            description: description,
            price: price,
        };
        serviceMutate(newService);
    };

    const tableHeader = (
        <tr>
            <th>Name</th>
            <th>Beschreibung</th>
            <th>Preis</th>
            <th>Aktion</th>
        </tr>
    );

    const tableRows = data.map((element: any) => (
        <tr key={element.id}>
            <td>{element.name}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>
                <Group>
                    <ActionIcon
                        variant="outline"
                        color="red"
                        onClick={() => {
                            deleteServiceHandler(element.id);
                        }}
                    >
                        <IconTrash size={16} color="red" />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));

    return (
        <Paper shadow="sm" p="lg">
            <Stack>
                <Group position="apart">
                    <Title order={3}>Leistungen</Title>
                    <Group position="right">
                        <AddServiceDialog
                            createServiceButtonHandler={
                                createServiceButtonHandler
                            }
                        />
                    </Group>
                </Group>
                <Table captionSide="bottom">
                    {!data.length && (
                        <caption>Es befinden sich keine Einträge</caption>
                    )}
                    <thead>{tableHeader}</thead>
                    <tbody>{tableRows}</tbody>
                </Table>
            </Stack>
        </Paper>
    );
};

export default Services;

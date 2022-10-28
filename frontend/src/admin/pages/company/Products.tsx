import { ActionIcon, Group, Paper, Stack, Table, Title } from '@mantine/core';
import { IconTrash } from '@tabler/icons';
import { useState } from 'react';
import AddServiceDialog from '../../../shared/dialogs/AddServiceDialog';
import { IService } from '../../../shared/models/IService';

const Services = () => {
    const [services, setServices] = useState<IService[]>([]);

    const deleteServiceHandler = (id: string) => {
        //TODO-MMUEJDE: Implement me
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
        setServices(prev => [...prev, newService]);
    };

    const tableHeader = (
        <tr>
            <th>Name</th>
            <th>Beschreibung</th>
            <th>Preis</th>
            <th>Aktion</th>
        </tr>
    );

    const tableRows = services.map(element => (
        <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>
                <Group>
                    <ActionIcon variant="outline" color="red">
                        <IconTrash size="lg" color="red" />
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
                    {!services.length && (
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

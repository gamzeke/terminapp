import {
    Center,
    Group,
    Loader,
    Paper,
    Space,
    Stack,
    Table,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { IconAlertCircle, IconSearch } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { ICustomer } from '../../../shared/models/ICustomer';

const CustomerTableRow = (customer: ICustomer) => {
    return (
        <tr>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.telephone}</td>
        </tr>
    );
};

interface CustomerTableProps {
    children?: React.ReactNode;
}

const CustomerTable = ({ children }: CustomerTableProps) => {
    return (
        <Table highlightOnHover>
            <thead>
                <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>E-Mail</th>
                    <th>Telefon</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </Table>
    );
};

const CustomerView = () => {
    const [filteredData, setFilteredData] = useState<ICustomer[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const filterData = (searchString: string) => {
        searchString ? setIsSearching(true) : setIsSearching(false);
        const result = data.filter((c: ICustomer) => {
            if (
                c.firstName.includes(searchString) ||
                c.lastName.includes(searchString) ||
                c.email.includes(searchString) ||
                c.telephone.includes(searchString)
            ) {
                return c;
            }
        });
        setFilteredData(result);
    };

    const { isLoading, isFetching, error, data } = useQuery(['clients'], () =>
        axios.get('http://localhost:8080/api/v1/clients').then(res => res.data)
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

    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>Kundendatenbank</Title>
                </Group>
            </Paper>
            <Space h="md" />
            <Paper p="xl">
                <TextInput
                    icon={<IconSearch />}
                    variant="filled"
                    placeholder="Suchen"
                    onChange={event => filterData(event.currentTarget.value)}
                />
                <Space h="lg" />

                {!filteredData.length && isSearching ? (
                    <Center>
                        <Text color="dimmed">Keine Treffer</Text>
                    </Center>
                ) : (
                    <CustomerTable>
                        {filteredData.length || isSearching
                            ? filteredData.map((customer: ICustomer) => {
                                  return (
                                      <CustomerTableRow
                                          key={customer.id}
                                          {...customer}
                                      />
                                  );
                              })
                            : data.map((customer: ICustomer) => {
                                  return (
                                      <CustomerTableRow
                                          key={customer.id}
                                          {...customer}
                                      />
                                  );
                              })}
                    </CustomerTable>
                )}
            </Paper>
        </>
    );
};

export default CustomerView;

import {
    Input,
    Space,
    Table,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'tabler-icons-react';
import ICustomer from '.';
import axios from "axios";
import React from 'react';
import ErrorMessage from '../../../shared/ErrorMessage';

const CustomerTableRow = (customer: ICustomer) => {
    return (
        <tr>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.telephone}</td>
            <td>{customer.streetName}</td>
            <td>{customer.streetNumber}</td>
            <td>{customer.postCode}</td>
            <td>{customer.city}</td>
            <td>{customer.state}</td>
            <td>{customer.country}</td>
        </tr>
    )
}

{/* <td>{customer.firstContactDate}</td> TODO-MMUEJDE: Wie kann ich das darstellen? */ }

interface CustomerTableProps {
    children?: React.ReactNode;
}

const CustomerTable = ({ children }: CustomerTableProps) => {
    return (<Table>
        <thead>
            <tr>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>E-Mail</th>
                <th>Telefon</th>
                <th>Straße</th>
                <th>Straßennummer</th>
                <th>Postleitzahl</th>
                <th>Stadt</th>
                <th>Bundesland</th>
                <th>Land</th>
            </tr>
        </thead>
        <tbody>{children}</tbody>
    </Table>
    )
}

const CustomerView = () => {
    const { isLoading, isFetching, error, data } = useQuery(["clients"], () =>
        axios
            .get("http://localhost:8080/api/v1/clients")
            .then((res) => res.data)
    )

    if (error) {
        return <ErrorMessage message='Die Kundendaten konnten nicht geladen werden.' />
    }

    //TODO-MMUEJDE: Ich muss die Suche einbauen!
    return (
        <>
            {
                isFetching || isLoading ?
                    "IsLoading" :
                    <>
                        <Input
                            icon={<Search />}
                            variant="filled"
                            placeholder="Suchen"
                        />
                        <Space h="lg" />
                        <CustomerTable>
                            {
                                data.map((customer: ICustomer) => {
                                    return <CustomerTableRow key={customer.id} {...customer} />
                                })
                            }
                        </CustomerTable>
                    </>
            }
        </>
    );
}

export default CustomerView;

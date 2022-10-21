import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ICompany } from '../../admin/pages/company';
import ErrorNotification from '../notification/ErrorNotification';
import SuccessNotification from '../notification/SuccessNotification';

interface BackOfficeContextProps {
    company: ICompany;
    updateCompany: (key: string, value: string) => void;
    saveCompany: () => void;
}

const BackOfficeContext = createContext<BackOfficeContextProps>({
    company: {
        companyName: "",
        welcomeText: "",
        street: "",
        additionalInformation: "",
        postCode: "",
        city: "",
        state: "",
        homepageLink: "",
        instagramLink: "",
        facebookLink: "",
        tikTokLink: "",
        youtubeLink: "",
    },
    updateCompany: (key: string, value: string) => void 0,
    saveCompany: () => void 0
});

export const useBackOfficeContext = () => {
    const context = useContext(BackOfficeContext);
    if (context === undefined) throw new Error("BackOfficeContext is not defined!");
    return context;
};

const BackOfficeContextProvider = ({ children }: PropsWithChildren) => {
    const [company, setCompany] = useState<ICompany>({
        companyName: "",
        welcomeText: "",
        street: "",
        additionalInformation: "",
        postCode: "",
        city: "",
        state: "",
        homepageLink: "",
        instagramLink: "",
        facebookLink: "",
        tikTokLink: "",
        youtubeLink: "",
    })

    const updateCompany = (key: string, value: string) => {
        const newCompany = {
            ...company,
            [key]: value
        }
        setCompany(newCompany)
    }

    const saveCompany = () => {
        companyMutation(company);
    }

    const { status, isLoading, isFetching, error, data } = useQuery(["settings"], () =>
        axios
            .get("http://localhost:8080/api/v1/company/1")
            .then((res) => res.data)
    )

    useEffect(() => {
        if (status === 'success' && !isLoading && !isFetching) {
            setCompany(data);
        }
    }, [data, status])

    let axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
    };

    const { mutate: companyMutation } = useMutation(
        (company: ICompany) => {
            const companyJson = JSON.stringify(company);
            return axios.post('http://localhost:8080/api/v1/company', companyJson, axiosConfig);
        },
        {
            onError: (error, variables, context) => {
                <ErrorNotification title='Geschäftsdaten konnten nicht aktualisiert werden' />
            },
            onSuccess: (data, variables, context) => {
                console.log(data);
                < SuccessNotification title='Geschäftsdaten erfolgreich aktualisiert' />
            },
        }
    );

    return (
        <BackOfficeContext.Provider value={{
            company,
            updateCompany,
            saveCompany
        }}>
            {children}
        </BackOfficeContext.Provider>
    )
}

export default BackOfficeContextProvider
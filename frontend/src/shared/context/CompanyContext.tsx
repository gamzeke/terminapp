import { showNotification } from '@mantine/notifications';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';
import { ICompany } from '../../admin/pages/company';

interface CompanyContextProps {
    company: ICompany;
    updateCompany: (key: string, value: string) => void;
    saveCompany: () => void;
}

const CompanyContext = createContext<CompanyContextProps>({
    company: {
        companyName: '',
        welcomeText: '',
        street: '',
        additionalInformation: '',
        postCode: '',
        city: '',
        state: '',
        phone: '',
        email: '',
        homepageLink: '',
        instagramLink: '',
        facebookLink: '',
        tikTokLink: '',
        youtubeLink: '',
    },
    updateCompany: (key: string, value: string) => void 0,
    saveCompany: () => void 0,
});

export const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    if (context === undefined)
        throw new Error('CompanyContext is not defined!');
    return context;
};

const CompanyContextProvider = ({ children }: PropsWithChildren) => {
    const [company, setCompany] = useState<ICompany>({
        companyName: '',
        welcomeText: '',
        street: '',
        additionalInformation: '',
        postCode: '',
        city: '',
        state: '',
        phone: '',
        email: '',
        homepageLink: '',
        instagramLink: '',
        facebookLink: '',
        tikTokLink: '',
        youtubeLink: '',
    });

    const updateCompany = (key: string, value: string) => {
        const newCompany = {
            ...company,
            [key]: value,
        };
        setCompany(newCompany);
    };

    const saveCompany = () => {
        companyMutation(company);
    };

    const { status, isLoading, isFetching, error, data } = useQuery(
        ['settings'],
        () =>
            axios
                .get('http://localhost:8080/api/v1/company/1')
                .then(res => res.data)
    );

    useEffect(() => {
        if (status === 'success' && !isLoading && !isFetching) {
            setCompany(data);
        }
    }, [data, status]);

    const { mutate: companyMutation } = useMutation(
        (company: ICompany) => {
            const companyJson = JSON.stringify(company);
            return axios.post(
                'http://localhost:8080/api/v1/company',
                companyJson,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            );
        },
        {
            onError: (error, variables, context) => {
                showNotification({
                    title: '🫤',
                    color: 'red',
                    message: 'Geschäftsdaten konnten nicht aktualisiert werden',
                });
            },
            onSuccess: (data, variables, context) => {
                showNotification({
                    title: '😊',
                    color: 'green',
                    message: 'Geschäftsdaten erfolgreich aktualisiert',
                });
            },
        }
    );

    return (
        <CompanyContext.Provider
            value={{
                company,
                updateCompany,
                saveCompany,
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};

export default CompanyContextProvider;

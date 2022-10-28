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
import { ICompany } from '../models/ICompany';

interface CompanyContextProps {
    company: ICompany;
    updateCompany: (key: string, value: string) => void;
    updateCompanyHours: (keys: string[], values: Date[]) => void;
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
        mondayOpen: null,
        mondayClose: null,
        tuesdayOpen: null,
        tuesdayClose: null,
        wednesdayOpen: null,
        wednesdayClose: null,
        thursdayOpen: null,
        thursdayClose: null,
        fridayOpen: null,
        fridayClose: null,
        saturdayOpen: null,
        saturdayClose: null,
    },
    updateCompany: (key: string, value: string | Date) => void 0,
    updateCompanyHours: (keys: string[], values: Date[]) => void 0,
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
        mondayOpen: null,
        mondayClose: null,
        tuesdayOpen: null,
        tuesdayClose: null,
        wednesdayOpen: null,
        wednesdayClose: null,
        thursdayOpen: null,
        thursdayClose: null,
        fridayOpen: null,
        fridayClose: null,
        saturdayOpen: null,
        saturdayClose: null,
    });

    const updateCompany = (key: string, value: string) => {
        const newCompany = {
            ...company,
            [key]: value,
        };
        setCompany(newCompany);
    };

    const updateCompanyHours = (keys: string[], values: Date[]) => {
        const newCompany = {
            ...company,
            [keys[0]]: values[0],
            [keys[1]]: values[1],
        };
        setCompany(newCompany);
    };

    const saveCompany = () => {
        companyMutation(company);
    };

    const { status, isLoading, isFetching, error, data } = useQuery(
        ['settings'],
        () =>
            axios.get('http://localhost:8080/api/v1/company/1').then(res => {
                const result = res.data;

                result.mondayOpen =
                    result.mondayOpen > 0 ? new Date(result.mondayOpen) : null;
                result.mondayClose =
                    result.mondayClose > 0
                        ? new Date(result.mondayClose)
                        : null;

                result.tuesdayOpen =
                    result.tuesdayOpen > 0
                        ? new Date(result.tuesdayOpen)
                        : null;
                result.tuesdayClose =
                    result.tuesdayClose > 0
                        ? new Date(result.tuesdayClose)
                        : null;

                result.wednesdayOpen =
                    result.wednesdayOpen > 0
                        ? new Date(result.wednesdayOpen)
                        : null;
                result.wednesdayClose =
                    result.wednesdayClose > 0
                        ? new Date(result.wednesdayClose)
                        : null;

                result.thursdayOpen =
                    result.thursdayOpen > 0
                        ? new Date(result.thursdayOpen)
                        : null;
                result.thursdayClose =
                    result.thursdayClose > 0
                        ? new Date(result.thursdayClose)
                        : null;

                result.fridayOpen =
                    result.fridayOpen > 0 ? new Date(result.fridayOpen) : null;
                result.fridayClose =
                    result.fridayClose > 0
                        ? new Date(result.fridayClose)
                        : null;

                result.saturdayOpen =
                    result.saturdayOpen > 0
                        ? new Date(result.saturdayOpen)
                        : null;
                result.saturdayClose =
                    result.saturdayClose > 0
                        ? new Date(result.saturdayClose)
                        : null;

                return result;
            })
    );

    useEffect(() => {
        if (status === 'success' && !isLoading && !isFetching) {
            setCompany(data);
        }
    }, [data, status]);

    const { mutate: companyMutation } = useMutation(
        (company: ICompany) => {
            const c = structuredClone(company);

            c.mondayOpen = company.mondayOpen?.getTime();
            c.mondayClose = company.mondayClose?.getTime();
            c.tuesdayOpen = company.tuesdayOpen?.getTime();
            c.tuesdayClose = company.tuesdayClose?.getTime();
            c.wednesdayOpen = company.wednesdayOpen?.getTime();
            c.wednesdayClose = company.wednesdayClose?.getTime();
            c.thursdayOpen = company.thursdayOpen?.getTime();
            c.thursdayClose = company.thursdayClose?.getTime();
            c.fridayOpen = company.fridayOpen?.getTime();
            c.fridayClose = company.fridayClose?.getTime();
            c.saturdayOpen = company.saturdayOpen?.getTime();
            c.saturdayClose = company.saturdayClose?.getTime();

            const companyJson = JSON.stringify(c);
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
                updateCompanyHours,
                saveCompany,
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};

export default CompanyContextProvider;

import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthView from './admin/pages/authentication/AuthView';
import CompanyView from './admin/pages/company/CompanyView';
import CustomerView from './admin/pages/customer/CustomerView';
import DashboardView from './admin/pages/dashboard/DashboardView';
import FAQView from './admin/pages/faq/FAQView';
import App from './App';
import './index.css';
import LandingPage from './landingpage/LandingPage';
import AppointmentView from './landingpage/SchedulerView';
import CompanyContextProvider from './shared/context/CompanyContext';
import PageNotFound from './shared/pages/PageNotFound';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <NotificationsProvider>
                <CompanyContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="admin" element={<App />}>
                                <Route index element={<DashboardView />} />
                                <Route
                                    path="customer"
                                    element={<CustomerView />}
                                />
                                <Route
                                    path="company"
                                    element={<CompanyView />}
                                />
                                <Route path="faq" element={<FAQView />} />
                            </Route>
                            <Route path="auth" element={<AuthView />} />
                            <Route
                                path="scheduler"
                                element={<AppointmentView />}
                            />
                            <Route path="/" element={<LandingPage />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>
                </CompanyContextProvider>
            </NotificationsProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

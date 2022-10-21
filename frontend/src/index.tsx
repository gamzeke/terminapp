import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import AppointmentView from './admin/pages/appointment/AppointmentView';
import AuthView from './admin/pages/authentication/AuthView';
import CalendarView from './admin/pages/calendar/CalendarView';
import CustomerView from './admin/pages/customer/CustomerView';
import DashboardView from './admin/pages/dashboard/DashboardView';
import FAQView from './admin/pages/faq/FAQView';
import CompanyView from './admin/pages/company/CompanyView';
import App from './App';
import './index.css';
import LandingPage from './landingpage/LandingPage';
import Imprint from './landingpage/pages/Imprint';
import Privacy from './landingpage/pages/Privacy';
import CompanyContextProvider from './shared/context/CompanyContext';
import PageNotFound from './shared/pages/PageNotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CompanyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="admin" element={<App />}>
              <Route index element={<DashboardView />} />
              <Route path="calendar" element={<CalendarView />} />
              <Route path="customer" element={<CustomerView />} />
              <Route path="company" element={<CompanyView />} />
              <Route path="faq" element={<FAQView />} />
            </Route>
            <Route path="auth" element={<AuthView />} />
            <Route path="scheduler" element={<AppointmentView />} />
            <Route path="/" element={<LandingPage />}>
              <Route path="imprint" element={<Imprint />} />
              <Route path="imprint" element={<Privacy />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CompanyContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
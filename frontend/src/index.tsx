import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import AuthView from './pages/authentication/AuthView';
import SettingsView from './pages/settings/SettingsView';
import DashboardView from './pages/dashboard/DashboardView';
import CalendarView from './pages/calendar/CalendarView';
import CustomerView from './pages/customer/CustomerView';
import AppointmentView from './pages/appointment/AppointmentView';
import Landingpage from './pages/landingpage/Landingpage';
import FAQView from './pages/faq/FAQView';
import GalleryView from './pages/gallery/GalleryView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="backoffice" element={<App />}>
          <Route index element={<DashboardView />} />
          <Route path="calendar" element={<CalendarView />} />
          <Route path="customer" element={<CustomerView />} />
          <Route path="settings" element={<SettingsView />} />
          <Route path="gallery" element={<GalleryView />} />
          <Route path="faq" element={<FAQView />} />
        </Route>
        <Route path="auth" element={<AuthView />} />
        <Route path="scheduler" element={<AppointmentView />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
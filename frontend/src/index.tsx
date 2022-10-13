import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import './index.css';
import AppointmentView from './pages/appointment/AppointmentView';
import AuthView from './pages/authentication/AuthView';
import CalendarView from './pages/calendar/CalendarView';
import CustomerView from './pages/customer/CustomerView';
import DashboardView from './pages/dashboard/DashboardView';
import FAQView from './pages/faq/FAQView';
import GalleryView from './pages/gallery/GalleryView';
import LandingPage from './pages/landingpage/LandingPage';
import SettingsView from './pages/settings/SettingsView';

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
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
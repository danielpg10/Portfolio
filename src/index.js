import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './globals.css';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';
import LanguageSwitcher from './components/utils/ui/SwitchLan';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
        <LanguageSwitcher />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
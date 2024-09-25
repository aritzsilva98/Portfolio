import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import App from './App';
import { I18nextProvider } from 'react-i18next'; // Importa I18nextProvider
import i18n from './i18n'; // Importa la configuración de i18n

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

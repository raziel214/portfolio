import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';// Aquí está el cambio
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </I18nextProvider>
    </React.StrictMode>
);

reportWebVitals();

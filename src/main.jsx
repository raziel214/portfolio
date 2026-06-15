import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './CSS/index.css';
import App from './App';
import i18n from './i18n';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>Loading…</div>}>
                <App />
            </Suspense>
        </I18nextProvider>
    </StrictMode>
);

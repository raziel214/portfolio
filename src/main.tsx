import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './styles/index.css';
import App from './components/App';
import i18n from './i18n';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root container #root not found in index.html');
}

createRoot(container).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>Loading…</div>}>
                <App />
            </Suspense>
        </I18nextProvider>
    </StrictMode>,
);

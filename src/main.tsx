import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './styles/index.css';
import App from './components/App';
import i18n from './i18n';

// SPA redirect restore: 404.html captured a deep URL like /portfolio/seti-experience,
// converted it to /portfolio/?p=/seti-experience&q=... and bounced here. We now rewrite
// the URL bar back to what the user requested so React Router can match it.
(function restoreSpaRedirect() {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const path = params.get('p');
    if (!path) return;
    const query = params.get('q');
    const restored =
        window.location.pathname.replace(/\/$/, '') +
        path +
        (query ? '?' + query.replace(/~and~/g, '&') : '') +
        window.location.hash;
    window.history.replaceState(null, '', restored);
})();

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

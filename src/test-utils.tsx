/* eslint-disable react-refresh/only-export-components */
import { type ReactElement, type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from './i18n';

interface ProvidersProps {
    children: ReactNode;
    initialEntries?: string[];
}

function AllProviders({ children, initialEntries = ['/'] }: ProvidersProps) {
    return (
        <I18nextProvider i18n={i18n}>
            <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
        </I18nextProvider>
    );
}

export function renderWithProviders(
    ui: ReactElement,
    { initialEntries, ...options }: RenderOptions & { initialEntries?: string[] } = {},
) {
    return render(ui, {
        wrapper: ({ children }) => (
            <AllProviders initialEntries={initialEntries}>{children}</AllProviders>
        ),
        ...options,
    });
}

export { i18n };

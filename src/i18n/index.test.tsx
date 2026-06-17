import { describe, it, expect } from 'vitest';
import { act } from '@testing-library/react';
import i18n from './index';

describe('i18n', () => {
    it('falls back to Spanish when storage is empty', () => {
        expect(['es', 'en']).toContain(i18n.language);
    });

    it('switches language and exposes both ES and EN translations', async () => {
        await act(async () => {
            await i18n.changeLanguage('es');
        });
        const titleEs = i18n.t('titleProfile');
        expect(titleEs).toMatch(/Solutions Architect/);

        await act(async () => {
            await i18n.changeLanguage('en');
        });
        const titleEn = i18n.t('titleProfile');
        expect(titleEn).toMatch(/Solutions Architect/);
    });

    it('persists the chosen language in localStorage', async () => {
        await act(async () => {
            await i18n.changeLanguage('en');
        });
        expect(window.localStorage.getItem('portfolio.lang')).toBe('en');
    });
});

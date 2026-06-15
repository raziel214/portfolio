import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import Skills from './Skills';

describe('Skills', () => {
    it('renders the 6 skill groups (backend, cloud, data, architecture, genai, agile)', () => {
        renderWithProviders(<Skills />);
        const groups = document.querySelectorAll('.skills-group');
        expect(groups).toHaveLength(6);
    });

    it('lists tags inside each group', () => {
        renderWithProviders(<Skills />);
        const tags = document.querySelectorAll('.skills-tag');
        expect(tags.length).toBeGreaterThan(18);
    });
});

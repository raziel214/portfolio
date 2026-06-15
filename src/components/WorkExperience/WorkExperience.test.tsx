import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import WorkExperience from './WorkExperience';
import { experiences } from '../../experiencesConfig';

describe('WorkExperience', () => {
    it('renders one link per experience defined in the config', () => {
        renderWithProviders(<WorkExperience />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(experiences.length);
    });

    it('each link points to the configured route', () => {
        renderWithProviders(<WorkExperience />);
        const hrefs = screen
            .getAllByRole('link')
            .map((link) => link.getAttribute('href'))
            .sort();
        const expectedRoutes = experiences.map((exp) => exp.route).sort();
        expect(hrefs).toEqual(expectedRoutes);
    });
});

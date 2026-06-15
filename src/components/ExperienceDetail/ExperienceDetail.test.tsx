import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import ExperienceDetail from './ExperienceDetail';
import type { ExperienceId } from '../../experiencesConfig';

describe('ExperienceDetail', () => {
    it('renders the company heading and a back button for a valid id', () => {
        renderWithProviders(<ExperienceDetail experienceId="seti" />);
        expect(screen.getByRole('button', { name: /volver|back/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/SETI/i);
    });

    it('renders nothing for an unknown experience id', () => {
        const { container } = renderWithProviders(
            <ExperienceDetail experienceId={'does-not-exist' as ExperienceId} />,
        );
        expect(container).toBeEmptyDOMElement();
    });
});

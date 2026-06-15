import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import Projects from './Projects';

describe('Projects', () => {
    it('renders the section heading and intro', () => {
        renderWithProviders(<Projects />);
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('highlights ProyectoDevsu as the featured project', () => {
        renderWithProviders(<Projects />);
        const featuredCard = screen.getByText(/ProyectoDevsu —/i).closest('article');
        expect(featuredCard).toHaveClass('project-card--featured');
        expect(featuredCard?.querySelector('.project-badge')).toBeInTheDocument();
    });

    it('renders 4 project cards', () => {
        renderWithProviders(<Projects />);
        const cards = document.querySelectorAll('.project-card');
        expect(cards).toHaveLength(4);
    });

    it('all "View repository" links open in a new tab safely', () => {
        renderWithProviders(<Projects />);
        const repoLinks = screen.getAllByRole('link', { name: /Ver repositorio|View repository/ });
        expect(repoLinks.length).toBeGreaterThanOrEqual(4);
        for (const link of repoLinks) {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        }
    });
});

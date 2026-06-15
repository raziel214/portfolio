import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

function Boom(): never {
    throw new Error('boom');
}

describe('ErrorBoundary', () => {
    let consoleError: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleError.mockRestore();
    });

    it('renders children when no error', () => {
        render(
            <ErrorBoundary>
                <p>safe content</p>
            </ErrorBoundary>,
        );
        expect(screen.getByText('safe content')).toBeInTheDocument();
    });

    it('renders fallback UI with a reload button when a child throws', () => {
        render(
            <ErrorBoundary>
                <Boom />
            </ErrorBoundary>,
        );
        expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /reload portfolio/i })).toBeInTheDocument();
    });
});

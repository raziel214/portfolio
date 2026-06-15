import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error('Unhandled UI error:', error, info);
    }

    private handleReload = (): void => {
        window.location.assign('/portfolio/');
    };

    render(): ReactNode {
        if (!this.state.hasError) {
            return this.props.children;
        }

        return (
            <div className="error-boundary">
                <h1>Something went wrong.</h1>
                <p>
                    The portfolio hit an unexpected error. You can try reloading; if it persists,
                    open the site in a new tab.
                </p>
                <button type="button" onClick={this.handleReload}>
                    Reload portfolio
                </button>
                {import.meta.env.DEV && this.state.error && <pre>{String(this.state.error)}</pre>}
            </div>
        );
    }
}

export default ErrorBoundary;

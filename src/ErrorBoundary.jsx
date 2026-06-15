import { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('Unhandled UI error:', error, info);
    }

    handleReload = () => {
        window.location.assign('/portfolio/');
    };

    render() {
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

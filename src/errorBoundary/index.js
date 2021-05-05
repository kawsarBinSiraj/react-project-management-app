import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="container-fluid error-boundary" style={{textAlign : 'center' , paddingTop : '50px'}}>
                    <h1 style={{marginBottom : '10px'}}>Something went wrong :)</h1>
                    <p style={{marginBottom : '10px'}}>Caught by  <span className="text-danger">Error Boundary</span> </p>
                    <p>Please Check Developer tools in your browser !! </p>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
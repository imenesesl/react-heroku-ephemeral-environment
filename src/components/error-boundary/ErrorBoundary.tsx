import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      'ErrorBoundary caught an error',
      error,
      errorInfo,
      'ID:',
      this.props.id
    );
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Error ID: {this.props.id}</h1>;
    }

    return this.props.children;
  }
}

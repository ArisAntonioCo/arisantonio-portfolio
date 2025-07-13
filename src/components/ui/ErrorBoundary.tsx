"use client";

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-dark flex items-center justify-center px-3 sm:px-4 lg:px-5">
            <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 max-w-md w-full text-center">
              <h2 className="text-2xl font-normal text-white mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-[#8C8C8C] mb-6">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#FF5500] hover:bg-[#E64D00] text-white px-6 py-3 rounded-full transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  // Tentukan error message & status
  let errorMessage: string;
  let errorStatus: number | string = 'Error';

  if (isRouteErrorResponse(error)) {
    // Error dari loader atau action
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || 'Something went wrong';
  } else if (error instanceof Error) {
    // JavaScript error
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error occurred';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-8 text-center max-w-2xl">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-destructive/10 mb-4">
            <svg
              className="w-12 h-12 text-destructive"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Error Status */}
        <h1 className="text-6xl font-bold mb-4 text-destructive">
          {errorStatus}
        </h1>

        {/* Error Message */}
        <p className="text-2xl font-semibold mb-2">
          Oops! Something went wrong
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          {errorMessage}
        </p>

        {/* Error Details (development only) */}
        {import.meta.env.DEV && error instanceof Error && error.stack && (
          <details className="mb-8 text-left">
            <summary className="cursor-pointer text-sm font-medium mb-2 hover:text-primary">
              Show error details (Dev mode only)
            </summary>
            <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs">
              {error.stack}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}

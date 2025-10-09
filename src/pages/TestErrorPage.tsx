import { useState } from 'react';

/**
 * Test Error Page
 * 
 * Halaman untuk testing error handling
 * Uncomment route ini di routes.tsx untuk testing:
 * 
 * {
 *   path: 'test-error',
 *   element: <TestErrorPage />,
 * }
 */
export default function TestErrorPage() {
  const [count, setCount] = useState(0);

  // Function yang akan throw error
  const throwError = () => {
    throw new Error('This is a test error from component!');
  };

  // Function untuk trigger error saat render
  const ErrorComponent = () => {
    if (count > 3) {
      throw new Error('Count is too high! Error triggered at render.');
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Error Testing Page</h1>
      <p className="text-muted-foreground mb-8">
        Use this page to test error handling
      </p>

      <div className="space-y-4 max-w-2xl">
        {/* Test 1: Click Error */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">
            Test 1: Component Error (Click)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Click button to throw error. Will be caught by ErrorBoundary.
          </p>
          <button
            onClick={throwError}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90"
          >
            Throw Error
          </button>
        </div>

        {/* Test 2: Render Error */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">
            Test 2: Render Error (Counter)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Click 4 times to trigger render error. Will be caught by ErrorBoundary.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Count: {count}
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90"
            >
              Reset
            </button>
          </div>
          <ErrorComponent />
        </div>

        {/* Test 3: 404 */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">
            Test 3: 404 Not Found
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Navigate to non-existent route.
          </p>
          <a
            href="/non-existent-page"
            className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90"
          >
            Go to 404 Page
          </a>
        </div>

        {/* Test 4: Async Error */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">
            Test 4: Async Error (Fetch)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Fetch from invalid URL to trigger error.
          </p>
          <button
            onClick={async () => {
              const response = await fetch('/api/invalid-endpoint');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
            }}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90"
          >
            Fetch Error
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 p-4 bg-muted rounded-lg max-w-2xl">
        <p className="text-sm">
          <strong>Note:</strong> Errors akan ditangkap oleh ErrorBoundary dan
          ErrorPage. Check console untuk melihat error details.
        </p>
      </div>
    </div>
  );
}

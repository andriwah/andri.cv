/**
 * CONTOH ERROR HANDLING PATTERNS
 * Copy paste yang diperlukan
 */

// ============================================
// 1. LOADER ERROR HANDLING
// ============================================

/*
// ProductDetailPage.tsx
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
}

// Loader function - fetch data sebelum render
export async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(`/api/products/${params.id}`);
  
  // Handle error responses
  if (response.status === 404) {
    throw new Response('Product not found', { 
      status: 404,
      statusText: 'Not Found'
    });
  }
  
  if (!response.ok) {
    throw new Response('Failed to load product', { 
      status: response.status,
      statusText: 'Server Error'
    });
  }
  
  const data = await response.json();
  return data as Product;
}

// Component
export default function ProductDetailPage() {
  const product = useLoaderData() as Product;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
}

// routes.tsx
import ProductDetailPage, { loader as productLoader } from '@/pages/ProductDetailPage';

{
  path: 'products/:id',
  element: <ProductDetailPage />,
  loader: productLoader,
}
*/

// ============================================
// 2. ACTION ERROR HANDLING (Form Submit)
// ============================================

/*
// ContactPage.tsx
import { Form, useActionData, ActionFunctionArgs } from 'react-router-dom';

interface ActionData {
  success?: boolean;
  errors?: {
    email?: string;
    message?: string;
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Validation
  if (!email || !message) {
    return {
      errors: {
        email: !email ? 'Email is required' : undefined,
        message: !message ? 'Message is required' : undefined,
      }
    };
  }
  
  // Submit
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    });
    
    if (!response.ok) {
      throw new Response('Failed to send message', { status: 500 });
    }
    
    return { success: true };
  } catch (error) {
    throw new Response('Network error', { status: 500 });
  }
}

export default function ContactPage() {
  const actionData = useActionData() as ActionData;
  
  return (
    <Form method="post">
      <div>
        <input name="email" type="email" />
        {actionData?.errors?.email && (
          <p className="text-destructive">{actionData.errors.email}</p>
        )}
      </div>
      
      <div>
        <textarea name="message" />
        {actionData?.errors?.message && (
          <p className="text-destructive">{actionData.errors.message}</p>
        )}
      </div>
      
      <button type="submit">Send</button>
      
      {actionData?.success && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
    </Form>
  );
}

// routes.tsx
import ContactPage, { action as contactAction } from '@/pages/ContactPage';

{
  path: 'contact',
  element: <ContactPage />,
  action: contactAction,
}
*/

// ============================================
// 3. PROTECTED ROUTE dengan AUTH
// ============================================

/*
// ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const isAuthenticated = checkAuthStatus(); // Your auth logic
  
  if (!isAuthenticated) {
    // Redirect ke login, save intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
}

// LoginPage.tsx
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const handleLogin = async () => {
    // Do login
    await login();
    
    // Redirect back to intended page
    navigate(from, { replace: true });
  };
  
  return <button onClick={handleLogin}>Login</button>;
}

// routes.tsx
{
  path: 'dashboard',
  element: (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
}
*/

// ============================================
// 4. ERROR BOUNDARY WRAPPER
// ============================================

/*
// App.tsx atau main.tsx
import { ErrorBoundary } from '@/components';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

// Atau wrap specific component
<ErrorBoundary fallback={<CustomErrorUI />}>
  <ComplexComponent />
</ErrorBoundary>
*/

// ============================================
// 5. CUSTOM ERROR HANDLING per Route
// ============================================

/*
// AdminErrorPage.tsx
import { useRouteError } from 'react-router-dom';

export default function AdminErrorPage() {
  const error = useRouteError();
  
  // Custom error UI for admin
  return (
    <div className="admin-error">
      <h1>Admin Error</h1>
      <p>Something went wrong in admin panel</p>
      // {/* ... */
// }
//     </div>
//   );
// }

/*
// routes.tsx
{
  path: 'admin',
  element: <AdminLayout />,
  errorElement: <AdminErrorPage />, // Custom error page
  children: [
    // admin routes
  ],
}
*/

// ============================================
// 6. ERROR MONITORING & LOGGING
// ============================================

/*
// errorLogger.ts
export function logError(error: Error, errorInfo?: any) {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }
  
  // Send to error tracking service in production
  if (import.meta.env.PROD) {
    // Sentry
    // Sentry.captureException(error, { extra: errorInfo });
    
    // LogRocket
    // LogRocket.captureException(error, { extra: errorInfo });
    
    // Custom API
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   body: JSON.stringify({ error: error.message, stack: error.stack }),
    // });
  }
}

// ErrorBoundary.tsx
componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  logError(error, errorInfo);
}
*/

// ============================================
// 7. RETRY LOGIC
// ============================================

/*
// useRetry hook
import { useState } from 'react';

export function useRetry<T>(fn: () => Promise<T>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const retry = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await fn();
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  
  return { retry, loading, error };
}

// Usage
const { retry, loading, error } = useRetry(async () => {
  await fetchData();
});

<button onClick={retry} disabled={loading}>
  {loading ? 'Retrying...' : 'Retry'}
</button>
*/

// ============================================
// 8. GLOBAL ERROR HANDLER
// ============================================

/*
// main.tsx
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  logError(new Error(event.reason));
});

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  logError(event.error);
});
*/

export {};

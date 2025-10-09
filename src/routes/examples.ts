/**
 * CONTOH ADVANCED ROUTING PATTERNS
 * File ini berisi contoh-contoh pattern routing yang bisa digunakan
 * Copy paste yang diperlukan ke routes.tsx
 */

// import { lazy } from 'react';
// import type { RouteObject } from 'react-router-dom';

// ============================================
// 1. NESTED ROUTES
// ============================================
// Contoh: /blog, /blog/post-1, /blog/create
/*
const BlogLayout = lazy(() => import('@/layouts/BlogLayout'));
const BlogListPage = lazy(() => import('@/pages/blog/BlogListPage'));
const BlogDetailPage = lazy(() => import('@/pages/blog/BlogDetailPage'));
const BlogCreatePage = lazy(() => import('@/pages/blog/BlogCreatePage'));

const blogRoutes: RouteObject = {
  path: 'blog',
  element: <BlogLayout />, // Layout khusus untuk blog
  children: [
    {
      index: true,
      element: <BlogListPage />, // /blog
    },
    {
      path: 'create',
      element: <BlogCreatePage />, // /blog/create
    },
    {
      path: ':slug',
      element: <BlogDetailPage />, // /blog/post-1
    },
  ],
};
*/

// ============================================
// 2. DYNAMIC ROUTES dengan Loader
// ============================================
// Untuk fetch data sebelum render component
/*
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));

const projectDetailRoute: RouteObject = {
  path: 'projects/:id',
  element: <ProjectDetailPage />,
  loader: async ({ params }) => {
    // Fetch data sebelum component render
    const response = await fetch(`/api/projects/${params.id}`);
    return response.json();
  },
};

// Di component, akses data dengan useLoaderData():
// const project = useLoaderData() as Project;
*/

// ============================================
// 3. PROTECTED ROUTES
// ============================================
// Untuk halaman yang perlu authentication
/*
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = false; // Cek auth state
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const DashboardPage = lazy(() => import('@/pages/DashboardPage'));

const protectedRoutes: RouteObject = {
  path: 'dashboard',
  element: (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
};
*/

// ============================================
// 4. REDIRECT ROUTES
// ============================================
/*
import { Navigate } from 'react-router-dom';

const redirectRoute: RouteObject = {
  path: 'old-path',
  element: <Navigate to="/new-path" replace />,
};
*/

// ============================================
// 5. ERROR BOUNDARY
// ============================================
/*
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));

const routeWithErrorBoundary: RouteObject = {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />, // Tangkap error di semua child routes
  children: [
    // ... routes
  ],
};
*/

// ============================================
// 6. GROUPED ROUTES by Feature
// ============================================
/*
// Auth Routes
const authRoutes: RouteObject = {
  path: 'auth',
  children: [
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPasswordPage />,
    },
  ],
};

// Admin Routes
const adminRoutes: RouteObject = {
  path: 'admin',
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <AdminDashboard />,
    },
    {
      path: 'users',
      element: <UsersPage />,
    },
    {
      path: 'settings',
      element: <SettingsPage />,
    },
  ],
};
*/

// ============================================
// EXAMPLE: Complete Routes Structure
// ============================================
/*
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      blogRoutes,          // Nested blog routes
      projectDetailRoute,  // Dynamic route
      protectedRoutes,     // Protected dashboard
      authRoutes,          // Auth group
      adminRoutes,         // Admin group
    ],
  },
  redirectRoute,           // Redirects
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
*/

export {};

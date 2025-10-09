// import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Layouts
import { RootLayout } from '@/layouts';

// Pages - Eager loading untuk pages yang sering diakses
import { HomePage, NotFoundPage, ErrorPage } from '@/pages';

// Pages - Lazy loading untuk optimization

/**
 * Route Configuration
 * 
 * Cara menambahkan halaman baru:
 * 1. Buat file component di folder src/pages (misal: BlogPage.tsx)
 * 2. Export di src/pages/index.ts
 * 3. Import dan tambahkan route di array children di bawah
 * 
 * Contoh:
 * {
 *   path: '/blog',
 *   element: <BlogPage />,
 * }
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, // Tangkap semua error di routes ini
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

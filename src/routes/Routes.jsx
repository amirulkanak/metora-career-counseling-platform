import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import MyProfile from '../pages/MyProfile';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () => fetch('/servicesData.json').then((res) => res.json()),
      },
      {
        path: 'my-profile',
        element: <MyProfile />,
      },
      {
        path: 'service/:serviceCard_id',
        element: <ServiceDetailsPage />,
        loader: () => fetch('/servicesData.json').then((res) => res.json()),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth',
        element: <Navigate to="/auth/login" />,
      },
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: '/auth/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default routes;

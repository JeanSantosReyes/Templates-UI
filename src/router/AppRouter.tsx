import { Navigate, useRoutes } from 'react-router-dom';

// Layout
import { DashboardLayout } from '../layouts/dashboard/DashboardLayout';
// Pages
import DashboardPage from "../pages/DashboardPage";
import SamplePage from '../pages/SamplePage';
import InformationPage from '../pages/InformationPage';
import WebsitePage from '../pages/WebsitePage';

export const AppRouter = () => {
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/app" />, index: true },
                { path: 'app', element: <DashboardPage /> },
                { path: 'sample', element: <SamplePage /> },
                { path: 'information', element: <InformationPage /> },
                { path: 'website', element: <WebsitePage /> }
            ]
        },
        { path: '/*', element: <Navigate to="/dashboard/app" /> }
    ])
    return routes;
}

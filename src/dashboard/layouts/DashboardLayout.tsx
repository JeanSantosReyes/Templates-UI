import { Navigate, Route, Routes } from "react-router-dom";
// Components
import { Configurator, DashboardNavbar, Footer, Sidenav } from "../components"
// Custom Hook Context
import { useMT } from '../../hooks/useMT';
// Routes
import { routes } from "../../router/routes";
// Icons
import { IconButton } from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

const path = '/assets/img/logo/';

export const DashboardLayout = () => {

    const { controller, setOpenConfigurator } = useMT();
    const { sidenavType } = controller;

    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidenav
                brandName='Jean Santos'
                routes={routes}
                brandImg={sidenavType === 'dark' ? path + 'logo-ct.png' : path + 'logo-ct-dark.png'}
            />
            <div className="p-4 xl:ml-80">
                <DashboardNavbar />
                <Configurator />
                <IconButton
                    size="lg"
                    color="white"
                    className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                    ripple={false}
                    onClick={() => setOpenConfigurator(true)}
                >
                    <Cog6ToothIcon className="h-5 w-5" />
                </IconButton>
                <Routes>
                    {
                        routes.map(({ layout, pages }) =>
                            layout === 'dashboard' &&
                            pages.map(({ path, element }) => (
                                <Route path={path} element={element} />
                            ))
                        )
                    }
                    <Route path="/*" element={<Navigate to='/dashboard/home' />} />
                </Routes>
                <div className="text-blue-gray-600">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

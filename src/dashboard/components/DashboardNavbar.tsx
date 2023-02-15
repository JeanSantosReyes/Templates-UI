import { Link, useLocation } from 'react-router-dom';
// Components Material Tailwind
import {
    Breadcrumbs,
    Button,
    IconButton,
    Input,
    Navbar,
    Typography,
} from '@material-tailwind/react';
// Icons heroicons
import {
    Bars3Icon,
    Cog6ToothIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid';
// Custom Hook Context
import { useMT } from '../../hooks/useMT';
// Component Notification
import { Notifications } from './secondary/Notifications';

export const DashboardNavbar = () => {

    const { pathname } = useLocation();
    const { controller, setOpenSidenav, setOpenConfigurator } = useMT();
    const { fixedNavbar, openSidenav } = controller;
    const [layout, page] = pathname.split('/').filter(el => el !== '')

    return (
        <Navbar
            color={fixedNavbar ? 'white' : 'transparent'}
            className={`rounded-xl transition-all ${fixedNavbar ? 'sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5' : 'px-0 py-1'}`}
            fullWidth
            blurred={fixedNavbar}
        >
            <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                <div className="capitalize">
                    <Breadcrumbs
                        className={`bg-transparent p-0 transition-all ${fixedNavbar ? 'mt-1' : ''}`}
                    >
                        <Link to={`/${layout}`}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
                            >
                                {layout}
                            </Typography>
                        </Link>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {page}
                        </Typography>
                    </Breadcrumbs>
                </div>
                <div className="flex items-center">
                    <div className="mr-auto md:mr-4 md:w-56">
                        <Input label="Type here" />
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="grid xl:hidden"
                        onClick={() => setOpenSidenav(!openSidenav)}
                    >
                        <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
                    </IconButton>
                    <Link to='/auth/login'>
                        <Button
                            variant="text"
                            color="blue-gray"
                            className="hidden items-center gap-1 px-4 xl:flex"
                        >
                            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                            Sign In
                        </Button>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className="grid xl:hidden"
                        >
                            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                        </IconButton>
                    </Link>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => setOpenConfigurator(true)}
                    >
                        <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
                    </IconButton>
                    <Notifications />
                </div>
            </div>
        </Navbar >
    )
}

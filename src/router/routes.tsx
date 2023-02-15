// Icons heroicons
import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
} from "@heroicons/react/24/solid";
// Dashboard Module
import { AboutPage, HomePage, Tables } from "../dashboard/pages";
// Auth Module
import { Login, Register } from "../auth/pages";
// Interface Routes
import { Routes } from '../interfaces/Routes_interface';

const icon = {
    className: "w-5 h-5 text-inherit",
};

export const routes: Routes[] = [
    {
        layout: "dashboard",
        pages: [
            {
                icon: <HomeIcon {...icon} />,
                name: "dashboard",
                path: "/home",
                element: <HomePage />,
            },
            {
                icon: <UserCircleIcon {...icon} />,
                name: "about",
                path: "/about",
                element: <AboutPage />,
            },
            {
                icon: <TableCellsIcon {...icon} />,
                name: "tables",
                path: "/tables",
                element: <Tables />,
            },
        ]
    },
    {
        title: "auth pages",
        layout: "auth",
        pages: [
            {
                icon: <ArrowRightOnRectangleIcon {...icon} />,
                name: "login",
                path: "/login",
                element: <Login />,
            },
            {
                icon: <UserPlusIcon {...icon} />,
                name: "register",
                path: "/register",
                element: <Register />,
            },
        ]
    }
]
import { NavLink } from "react-router-dom";
// Custom Hook Context
import { useMT } from "../../hooks/useMT";
// Interface Routes
import { Routes } from '../../interfaces/Routes_interface';
// Components Material Tailwind
import {
    Avatar,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
// Icons heroicons
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
    brandName: string;
    brandImg: string;
    routes: Routes[];
}

export const Sidenav = ({ brandName, brandImg, routes }: Props) => {

    const { controller, setOpenSidenav } = useMT();
    const { sidenavColor, sidenavType, openSidenav } = controller;

    const sidenavTypes = {
        dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
        white: "bg-white shadow-lg",
        transparent: "bg-transparent",
    };

    return (
        <aside
            className={`
            ${sidenavTypes[sidenavType]}
            ${openSidenav ? 'translate-x-0' : '-translate-x-80'}
            fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0
            `}
        >
            <div
                className={`relative border-b
                ${(sidenavType === 'dark') ? 'border-white/20' : 'border-blue-gray-50'}`}
            >
                <NavLink to='/dashboard/home' className="flex items-center gap-4 py-6 px-8">
                    <Avatar src={brandImg} size="sm" />
                    <Typography
                        variant="h6"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}
                    >
                        {brandName}
                    </Typography>
                </NavLink>
                <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    ripple={false}
                    className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                    onClick={() => setOpenSidenav(false)}
                >
                    <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
                </IconButton>
            </div>
            <div className="m-4">
                {
                    routes.map(({ title, layout, pages }, key) => (
                        <ul key={key} className="mb-4 flex flex-col gap-1">
                            {
                                title && (
                                    <li className="mx-3.5 mt-4 mb-2">
                                        <Typography
                                            variant="small"
                                            color={sidenavType === "dark" ? "white" : "blue-gray"}
                                            className="font-black uppercase opacity-75"
                                        >
                                            {title}
                                        </Typography>
                                    </li>
                                )
                            }
                            {
                                pages.map(({ icon, name, path }) => (
                                    <li key={name}>
                                        <NavLink to={`/${layout}${path}`}>
                                            {
                                                ({ isActive }) => (
                                                    <Button
                                                        variant={isActive ? "gradient" : "text"}
                                                        className="flex items-center gap-4 px-4 capitalize"
                                                        color={
                                                            isActive
                                                                ? sidenavColor
                                                                : (sidenavType === "dark")
                                                                    ? 'white'
                                                                    : 'blue-gray'
                                                        }
                                                        fullWidth
                                                        onClick={() => setOpenSidenav(false)} //Cerrar Sidenav en movil
                                                    >
                                                        {icon}
                                                        <Typography
                                                            color="inherit"
                                                            className="font-medium capitalize"
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </Button>
                                                )
                                            }
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        </aside >
    )
}

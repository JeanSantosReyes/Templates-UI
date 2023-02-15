import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import { routes } from "./routes";

import logo from '../logo.png';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} className="logo" alt="Logo" />
                    <ul>
                        {
                            routes.map(({ to, name }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))
                    }
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

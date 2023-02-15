import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { routes } from "./routes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                }
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

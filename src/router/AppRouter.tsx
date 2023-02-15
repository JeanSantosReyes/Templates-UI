import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<Navigate to={"/dashboard/*"} />} />
        </Routes>
    )
}

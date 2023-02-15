import { Route, Routes } from "react-router-dom"
import { DashboardLayout } from "../layouts/DashboardLayout"

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<DashboardLayout />} />
        </Routes>
    )
}
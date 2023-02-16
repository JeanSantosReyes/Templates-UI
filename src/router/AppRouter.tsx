import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignInFormFormik } from "../pages/SignInFormFormik";
import { SignUpUseFormik } from "../pages/SignUpUseFormik";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<SignInFormFormik />} />
                <Route path="/register" element={<SignUpUseFormik />} />
                <Route path="/*" element={<Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
    children: ReactElement<any, any>
}

export const ScrollTop = ({ children }: Props) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return children || null;
}

export default ScrollTop;
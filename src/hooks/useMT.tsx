import { useContext } from 'react';
import { Context } from '../context';

export const useMT = () => {

    const {
        setOpenSidenav, setSidenavType, setSidenavColor, setTransparentNavbar,
        setFixedNavbar, setOpenConfigurator, controller
    } = useContext(Context)

    return {
        setOpenSidenav,
        setSidenavType,
        setSidenavColor,
        setTransparentNavbar,
        setFixedNavbar,
        setOpenConfigurator,
        controller
    }
}

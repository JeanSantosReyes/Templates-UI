import { useReducer } from 'react';
// Context
import { MT_Context as Context } from './MT_Context';
// Reducer
import { MT_Reducer as Reducer } from './MT_Reducer';
// Interface
import { MT_state as State } from "../interfaces/MT_interface";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MT_Provider = ({ children }: Props) => {

    const initialState: State = {
        openSidenav: false,
        sidenavType: 'dark',
        sidenavColor: 'blue',
        transparentNavbar: true,
        fixedNavbar: false,
        openConfigurator: false,
    };

    const [controller, dispatch] = useReducer(Reducer, initialState);

    const setOpenSidenav = (value: boolean) => dispatch({ type: 'OPEN_SIDENAV', value });
    const setSidenavType = (value: string) => dispatch({ type: 'SIDENAV_TYPE', value });
    const setSidenavColor = (value: string) => dispatch({ type: 'SIDENAV_COLOR', value });
    const setTransparentNavbar = (value: boolean) => dispatch({ type: 'TRANSPARENT_NAVBAR', value });
    const setFixedNavbar = (value: boolean) => dispatch({ type: 'FIXED_NAVBAR', value });
    const setOpenConfigurator = (value: boolean) => dispatch({ type: 'OPEN_CONFIGURATOR', value });

    return (
        <Context.Provider value={{
            setOpenSidenav,
            setSidenavType,
            setSidenavColor,
            setTransparentNavbar,
            setFixedNavbar,
            setOpenConfigurator,
            controller
        }}>
            {children}
        </Context.Provider>
    )
}

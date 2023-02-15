import { createContext } from 'react';
import { MT_state as State } from '../interfaces/MT_interface';

type ContextProps = {
    setOpenSidenav: (value: boolean) => void;
    setSidenavType: (value: string) => void;
    setSidenavColor: (value: string) => void;
    setTransparentNavbar: (value: boolean) => void;
    setFixedNavbar: (value: boolean) => void;
    setOpenConfigurator: (value: boolean) => void;
    controller: State
}

export const MT_Context = createContext<ContextProps>({} as ContextProps);
MT_Context.displayName = 'Context';
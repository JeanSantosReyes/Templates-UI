import { Colors } from "./Colors";

export interface MT_state {
    openSidenav: boolean;
    sidenavColor: Colors;
    sidenavType: SideType;
    transparentNavbar: boolean;
    fixedNavbar: boolean;
    openConfigurator: boolean;
}

type SideType = 'dark' | 'white' | 'transparent';
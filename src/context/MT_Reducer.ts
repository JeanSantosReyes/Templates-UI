
type Action =
    | { type: 'OPEN_SIDENAV', value: any }
    | { type: 'SIDENAV_TYPE', value: any }
    | { type: 'SIDENAV_COLOR', value: any }
    | { type: 'TRANSPARENT_NAVBAR', value: any }
    | { type: 'FIXED_NAVBAR', value: any }
    | { type: 'OPEN_CONFIGURATOR', value: any }

export const MT_Reducer = (state: any, action: Action) => {

    switch (action.type) {
        case 'OPEN_SIDENAV':
            return { ...state, openSidenav: action.value };
        case 'SIDENAV_TYPE':
            return { ...state, sidenavType: action.value };
        case 'SIDENAV_COLOR':
            return { ...state, sidenavColor: action.value };
        case 'TRANSPARENT_NAVBAR':
            return { ...state, transparentNavbar: action.value };
        case 'FIXED_NAVBAR':
            return { ...state, fixedNavbar: action.value };
        case 'OPEN_CONFIGURATOR':
            return { ...state, openConfigurator: action.value };

        default:
            throw new Error(`Unhandled action type: ${action}`);
    }

}
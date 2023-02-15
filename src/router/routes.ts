import { Commerce } from "../pages/Commerce";

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
}

export const routes: Route[] = [
    {
        to: '/',
        path: '',
        Component: Commerce
    },
]
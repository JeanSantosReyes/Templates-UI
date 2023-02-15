import { Page } from "../pages/Page";

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
}

export const routes: Route[] = [
    {
        to: '/',
        path: '',
        Component: Page
    },
]
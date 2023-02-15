import { Home, About } from '../pages/Pages';

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
}

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        Component: Home,
        name: 'Home'
    },
    {
        to: '/about',
        path: 'about',
        Component: About,
        name: 'About'
    },
]
export interface Routes {
    title?: string;
    layout: string;
    pages: Pages[];
}

interface Pages {
    icon: JSX.Element;
    name: string;
    path: string;
    element: JSX.Element;
}
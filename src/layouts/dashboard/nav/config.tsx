// component

import { SvgColor } from "../../../components/svg-color/SvgColor";

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />

const navConfig = [
    {
        title: 'dashboard',
        path: '/dashboard/app',
        icon: icon('ic_analytics'),
    },
    {
        title: 'sample',
        path: '/dashboard/sample',
        icon: icon('ic_user'),
    },
    {
        title: 'information',
        path: '/dashboard/information',
        icon: icon('ic_cart'),
    },
    {
        title: 'website',
        path: '/dashboard/website',
        icon: icon('ic_blog'),
    },
];

export default navConfig;

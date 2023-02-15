import { Colors } from "./Colors";

// ------------------------------------------------------------------------------------------------
export interface UserProps {
    img: string;
    name: string;
    email: string;
    job: string[];
    online: boolean;
    date: string;
}

// ------------------------------------------------------------------------------------------------
export interface ProjectProps {
    img: string;
    name: string;
    members: MembersProject[];
    budget: string;
    completion: number;
}

interface MembersProject {
    img: string;
    name: string;
}

// ------------------------------------------------------------------------------------------------
export interface StatisticProps {
    color: Colors;
    icon: JSX.Element;
    title: string;
    value: string;
    footer: Footer
}

interface Footer {
    color: string;
    value: string;
    label: string;
}
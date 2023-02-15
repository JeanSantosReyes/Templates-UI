import { StatisticProps } from "../../interfaces/Data_interface";
import { BanknotesIcon, ChartBarIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";

const iconClass = {
    className: "w-6 h-6 text-white",
};

export const StatisticsData: StatisticProps[] = [
    {
        color: "blue",
        icon: <BanknotesIcon {...iconClass} />,
        title: "Today's Money",
        value: "$53k",
        footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
        },
    },
    {
        color: "pink",
        icon: <UserIcon  {...iconClass} />,
        title: "Today's Users",
        value: "2,300",
        footer: {
            color: "text-green-500",
            value: "+3%",
            label: "than last month",
        },
    },
    {
        color: "green",
        icon: <UserPlusIcon  {...iconClass} />,
        title: "New Clients",
        value: "3,462",
        footer: {
            color: "text-red-500",
            value: "-2%",
            label: "than yesterday",
        },
    },
    {
        color: "orange",
        icon: <ChartBarIcon {...iconClass} />,
        title: "Sales",
        value: "$103,430",
        footer: {
            color: "text-green-500",
            value: "+5%",
            label: "than yesterday",
        },
    },
];
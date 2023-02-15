import { ProjectProps } from "../../interfaces/Data_interface";

export const ProjectsData: ProjectProps[] = [
    {
        img: "/assets/img/projects/logo-xd.svg",
        name: "Material XD Version",
        members: [
            { img: "/assets/img/users/team-1.jpeg", name: "Romina Hadid" },
            { img: "/assets/img/users/team-2.jpeg", name: "Ryan Tompson" },
            { img: "/assets/img/users/team-3.jpeg", name: "Jessica Doe" },
            { img: "/assets/img/users/team-4.jpeg", name: "Alexander Smith" },
        ],
        budget: "$14,000",
        completion: 60,
    },
    {
        img: "/assets/img/projects/logo-atlassian.svg",
        name: "Add Progress Track",
        members: [
            { img: "/assets/img/users/team-2.jpeg", name: "Ryan Tompson" },
            { img: "/assets/img/users/team-4.jpeg", name: "Alexander Smith" },
        ],
        budget: "$3,000",
        completion: 40,
    },
    {
        img: "/assets/img/projects/logo-slack.svg",
        name: "Fix Platform Errors",
        members: [
            { img: "/assets/img/users/team-3.jpeg", name: "Jessica Doe" },
            { img: "/assets/img/users/team-1.jpeg", name: "Romina Hadid" },
        ],
        budget: "Not set",
        completion: 100,
    },
    {
        img: "/assets/img/projects/logo-spotify.svg",
        name: "Launch our Mobile App",
        members: [
            { img: "/assets/img/users/team-4.jpeg", name: "Alexander Smith" },
            { img: "/assets/img/users/team-3.jpeg", name: "Jessica Doe" },
            { img: "/assets/img/users/team-2.jpeg", name: "Ryan Tompson" },
            { img: "/assets/img/users/team-1.jpeg", name: "Romina Hadid" },
        ],
        budget: "$20,500",
        completion: 80,
    },
    {
        img: "/assets/img/projects/logo-jira.svg",
        name: "Add the New Pricing Page",
        members: [{ img: "/assets/img/users/team-4.jpeg", name: "Alexander Smith" }],
        budget: "$500",
        completion: 25,
    },
    {
        img: "/assets/img/projects/logo-invision.svg",
        name: "Redesign New Online Shop",
        members: [
            { img: "/assets/img/users/team-1.jpeg", name: "Romina Hadid" },
            { img: "/assets/img/users/team-4.jpeg", name: "Alexander Smith" },
        ],
        budget: "$2,000",
        completion: 100,
    },
];

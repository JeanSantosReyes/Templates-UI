import { HeartIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const brandName: string = 'Jean Santos';
const brandLink: string = 'https://jean-santos.web.app'
const year = new Date().getFullYear();
const routes = [
    { name: "Website", path: "https://jean-santos.web.app/" },
    { name: "Facebook", path: "https://www.facebook.com/jeansantosdx/" },
    { name: "LinkenIn", path: "https://www.linkedin.com/in/jean-santos97/" },
    { name: "Github", path: "https://github.com/JeanSantosReyes" },
]

export const Footer = () => {
    return (
        <footer className="py-2">
            <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                <Typography variant="small" className="font-normal text-inherit">
                    &copy; {year}, made with{" "}
                    <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
                    <a
                        href={brandLink}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-blue-500"
                    >
                        {brandName}
                    </a>{" "}
                    for a better web.
                </Typography>
                <ul className="flex items-center gap-4">
                    {
                        routes.map(({ name, path }) => (
                            <li key={name}>
                                <Typography
                                    as="a"
                                    href={path}
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="small"
                                    className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                                >
                                    {name}
                                </Typography>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}
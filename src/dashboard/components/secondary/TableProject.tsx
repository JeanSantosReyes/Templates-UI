// Components Material Tailwind
import { Avatar, Card, CardBody, CardHeader, Progress, Tooltip, Typography } from "@material-tailwind/react";
// Hero icons
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
// Interface Project
import { ProjectProps } from "../../../interfaces/Data_interface"

interface Props {
    projects: ProjectProps[]
}

export const TableProject = ({ projects }: Props) => {

    const heads = ["companies", "members", "budget", "completion", ""]

    return (
        <Card>
            <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
                <Typography variant="h6" color="white">
                    Projects Table
                </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {heads.map(
                                (head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(({ img, name, members, budget, completion }, key) => {
                            const className = `py-3 px-5 
                            ${key === projects.length - 1 ? "" : "border-b border-blue-gray-50"}`;
                            return (
                                <tr key={name}>
                                    {/* COMPANIES */}
                                    <td className={className}>
                                        <div className="flex items-center gap-4">
                                            <Avatar src={img} alt={name} size="sm" />
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold"
                                            >
                                                {name}
                                            </Typography>
                                        </div>
                                    </td>
                                    {/* MEMBERS */}
                                    <td className={className}>
                                        {members.map(({ img, name }, key) => (
                                            <Tooltip key={name} content={name}>
                                                <Avatar
                                                    src={img}
                                                    alt={name}
                                                    size="xs"
                                                    variant="circular"
                                                    className={`
                                                        cursor-pointer border-2 border-white
                                                        ${key === 0 ? "" : "-ml-2.5"}`}
                                                />
                                            </Tooltip>
                                        ))}
                                    </td>
                                    {/* BUDGET */}
                                    <td className={className}>
                                        <Typography
                                            variant="small"
                                            className="text-xs font-medium text-blue-gray-600"
                                        >
                                            {budget}
                                        </Typography>
                                    </td>
                                    {/* COMPLETION */}
                                    <td className={className}>
                                        <div className="w-10/12">
                                            <Typography
                                                variant="small"
                                                className="mb-1 block text-xs font-medium text-blue-gray-600"
                                            >
                                                {completion}%
                                            </Typography>
                                            <Progress
                                                value={completion}
                                                variant="gradient"
                                                color={completion === 100 ? 'green' : completion >= 50 ? 'blue' : 'orange'}
                                                className="h-1"
                                            />
                                        </div>
                                    </td>
                                    {/* ACTIONS */}
                                    <td className={className}>
                                        <Typography
                                            // as="a"
                                            // href="#"
                                            className="text-xs font-semibold text-blue-gray-600 cursor-pointer"
                                        >
                                            <EllipsisVerticalIcon
                                                strokeWidth={2}
                                                className="h-5 w-5 text-inherit"
                                            />
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    )
}

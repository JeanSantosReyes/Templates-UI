// Components Material Tailwind
import { Avatar, Card, CardBody, CardHeader, Chip, Typography } from '@material-tailwind/react';
// Interface User
import { UserProps } from '../../../interfaces/Data_interface';

interface Props {
    users: UserProps[]
}

export const TableUser = ({ users }: Props) => {

    const heads = ["user", "function", "status", "employed", ""]

    return (
        <Card>
            <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
                <Typography variant="h6" color="white">
                    Users Table
                </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {heads.map(head => (
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
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(({ img, name, email, job, online, date }, key) => {
                                const className = `py-3 px-5 
                                    ${key === users.length - 1 ? '' : 'border-b border-blue-gray-50'}`;
                                return (
                                    <tr key={name}>
                                        {/* USERS */}
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                <Avatar src={img} alt={name} size="sm" />
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-semibold"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography className="text-xs font-normal text-blue-gray-500">
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        {/* FUNCTION */}
                                        <td className={className}>
                                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                                {job[0]}
                                            </Typography>
                                            <Typography className="text-xs font-normal text-blue-gray-500">
                                                {job[1]}
                                            </Typography>
                                        </td>
                                        {/* STATUS */}
                                        <td className={className}>
                                            <Chip
                                                variant="gradient"
                                                color={online ? "green" : "blue-gray"}
                                                value={online ? "online" : "offline"}
                                                className="py-0.5 px-2 text-[11px] font-medium"
                                            />
                                        </td>
                                        {/* EMPLOYED */}
                                        <td className={className}>
                                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                                {date}
                                            </Typography>
                                        </td>
                                        {/* ACTIONS - Update/Delete */}
                                        <td className={className}>
                                            <Typography
                                                // as="a"
                                                // href="#"
                                                className="text-xs font-semibold text-blue-gray-600 cursor-pointer"
                                            >
                                                Edit
                                            </Typography>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </CardBody>
        </Card>
    )
}

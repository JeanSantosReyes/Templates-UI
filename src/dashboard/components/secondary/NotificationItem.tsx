// Icons heroicons
import {
    ClockIcon,
    CreditCardIcon
} from '@heroicons/react/24/solid'
// Components Material Tailwind
import {
    Avatar,
    MenuItem,
    Typography
} from '@material-tailwind/react'

interface Props {
    title?: string;
    body?: string;
    avatar: string;
    time: string;
}

export const NotificationItem = ({ title, body, avatar, time }: Props) => {
    return (
        <MenuItem className="flex items-center gap-3">
            {
                (avatar === 'payment')
                    ? (
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                            <CreditCardIcon className="h-4 w-4 text-white" />
                        </div>
                    )
                    : (
                        <Avatar
                            src={avatar}
                            alt="item-1"
                            size="sm"
                            variant="circular"
                        />
                    )
            }
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                >
                    <strong>{title}</strong> {body}
                </Typography>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                >
                    <ClockIcon className="h-3.5 w-3.5" /> {time}
                </Typography>
            </div>
        </MenuItem>
    )
}

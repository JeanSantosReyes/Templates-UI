import { BellIcon } from '@heroicons/react/24/solid'
import { IconButton, Menu, MenuHandler, MenuList } from '@material-tailwind/react'
import { NotificationItem } from './NotificationItem'

export const Notifications = () => {
    return (
        <Menu>
            <MenuHandler>
                <IconButton variant="text" color="blue-gray">
                    <BellIcon className="h-5 w-5 text-blue-gray-500" />
                </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">

                <NotificationItem
                    title='New message'
                    body='from Laur'
                    avatar='https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg'
                    time='13 minutes ago'
                />

                <NotificationItem
                    title='New album'
                    body='by Travis Scott'
                    avatar='https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg'
                    time='1 day ago'
                />

                <NotificationItem
                    body='Payment successfully completed'
                    avatar='payment'
                    time='2 days ago'
                />

            </MenuList>
        </Menu>
    )
}

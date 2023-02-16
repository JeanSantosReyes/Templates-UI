import { Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography, alpha } from '@mui/material';
import { useState } from "react";
import account from "../../../_mock/account";

const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
    },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
    },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
    },
];

export const AccountPopover = () => {

    const [open, setOpen] = useState<EventTarget & HTMLButtonElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <>
            <IconButton
                onClick={(event) => handleOpen(event)}
                sx={{
                    p: 0,
                    ...(!!open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                        },
                    })
                }}
            >
                <Avatar src={account.photoURL} alt="photoURL" />
            </IconButton>

            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1.5,
                        ml: 0.75,
                        width: 180,
                        '& .MuiMenuItem-root': {
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {account.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {account.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'solid' }} />

                <Stack sx={{ p: 1 }}>
                    {MENU_OPTIONS.map((option) => (
                        <MenuItem key={option.label} onClick={handleClose}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{ borderStyle: 'solid' }} />

                <MenuItem onClick={handleClose} sx={{ m: 1 }}>
                    Logout
                </MenuItem>

            </Popover>
        </>
    )
}
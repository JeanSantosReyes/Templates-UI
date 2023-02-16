import { forwardRef } from "react"
import { Icon, IconifyIcon } from "@iconify/react"
import { Box } from "@mui/material"

interface Props {
    icon: string | IconifyIcon
    width?: number | string;
    sx?: object;
}

export const Iconify = forwardRef(({ icon, width = 20, sx, ...other }: Props, ref) => (
    <Box
        ref={ref}
        component={Icon}
        icon={icon}
        sx={{ width, height: width, ...sx }}
        {...other}
    />
)) 
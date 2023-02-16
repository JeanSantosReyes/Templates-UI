import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";

interface Props {
    src: string;
    sx: object;
}

export const SvgColor = forwardRef(({ src, sx, ...other }: Props, ref) => (
    <Box
        component="span"
        className="svg-color"
        ref={ref}
        sx={{
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: 'currentColor',
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx,
        }}
        {...other}
    />
));
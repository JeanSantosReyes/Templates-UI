import { Link, SxProps, Theme, Typography } from '@mui/material';

interface Props {
    sx?: SxProps<Theme> | undefined;
    [x: string]: any;
}

export const Copyright = (props: Props) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://jean-santos.web.app">
                Jean Santos
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

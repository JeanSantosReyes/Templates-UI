import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';

// import { FormFormik } from '../components/FormFormik';
import { Copyright } from '../components/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface Props {
    children?: JSX.Element | JSX.Element[];
    title: string;
}

export const AuthLayout = ({ children, title = '' }: Props) => {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>

            <Grid
                item
                xs={false} //movil
                sm={4} //laptops
                md={7} //tablets
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid
                item
                xs={12} //movil
                sm={8} //laptops
                md={5} //tablets
                component={Paper}
                elevation={6}
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* Icon + Title */}
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {title}
                    </Typography>

                    {/* Forms */}
                    {children}

                    {/* Copyright */}
                    <Copyright sx={{ mt: 3 }} />

                </Box>
            </Grid>
        </Grid >
    )
}

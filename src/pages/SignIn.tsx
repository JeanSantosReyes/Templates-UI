import { FormEvent } from 'react';

import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

export const SignIn = () => {

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }

    return (
        <AuthLayout title="Sign In">
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>

            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </AuthLayout>
    )
}

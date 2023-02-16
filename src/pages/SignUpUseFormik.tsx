import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthLayout } from "../layout/AuthLayout"

import { Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

/* 
https://formik.org/docs/examples/with-material-ui
Uso de Formik + Material UI segun documentacion de Formik
haciendo uso de useFormik
*/

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password1: string;
    password2: string;
}

const INIT_FORM: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
}

const validationSchema = Yup.object({
    firstName: Yup.string().min(2, 'Min 2 characters required').max(15, 'Max 15 characters required').required('First Name is required'),
    lastName: Yup.string().min(2, 'Min 2 characters required').max(15, 'Max 15 characters required').required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password1: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    password2: Yup.string().oneOf([Yup.ref('password1')], 'Passwords must match').required('Password is required')

})

export const SignUpUseFormik = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { handleSubmit, handleChange, handleBlur, values, touched, errors, isValid, dirty } = useFormik({
        initialValues: INIT_FORM,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <AuthLayout title="Sign up">

            <form onSubmit={handleSubmit} noValidate>

                <Grid container sx={{ mt: 2 }} spacing={2}>

                    <Grid item xs={12} sm={6} >
                        <TextField
                            fullWidth
                            type="text"
                            name="firstName"
                            label="First Name"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.firstName && Boolean(errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <TextField
                            fullWidth
                            type="text"
                            name="lastName"
                            label="Last Name"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.lastName && Boolean(errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                        />
                    </Grid>

                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        type="email"
                        name="email"
                        label="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <FormControl
                        fullWidth
                        error={(touched.password1 && errors.password1) ? true : false}
                        variant="outlined"
                    >
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            name="password1"
                            label="Password"
                            value={values.password1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password1 && Boolean(errors.password1)}
                        />
                        <FormHelperText>{touched.password1 && errors.password1}</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <FormControl
                        fullWidth
                        error={(touched.password2 && errors.password2) ? true : false}
                        variant="outlined"
                    >
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            name="password2"
                            label="Password"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password2 && Boolean(errors.password2)}
                        />
                        <FormHelperText>{touched.password2 && errors.password2}</FormHelperText>
                    </FormControl>
                </Grid>

                <Button
                    fullWidth
                    disabled={!isValid || !dirty}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Sign Up
                </Button>

            </form>

            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link component={RouterLink} variant="body2" to="/login">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>

        </AuthLayout>
    )
}

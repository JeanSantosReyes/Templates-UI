import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Button, FormControl, FormHelperText, Grid, IconButton,
    InputAdornment, InputLabel, Link, OutlinedInput, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

/* 
https://formik.org/docs/examples/with-material-ui
Uso de Formik + Material UI segun documentacion de Formik
haciendo uso de useFormik
*/

interface FormData {
    email: string;
    password: string;
}

const INIT_FORM: FormData = {
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
    password: Yup.string().min(6, 'La contraseña debe tener min 6 caracteres').required('Requerido'),
})


export const SignInUseFormik = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { handleSubmit, resetForm, handleChange, handleBlur, values, touched, errors, isValid, dirty } = useFormik({
        initialValues: INIT_FORM,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <AuthLayout title="Sign in">

            <form onSubmit={handleSubmit} noValidate>

                <TextField
                    fullWidth
                    sx={{ mt: 2 }}
                    type="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />

                {/* <TextField
                        fullWidth
                        sx={{ mt: 2 }}
                        type="password"
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                    /> */}

                <FormControl
                    fullWidth
                    sx={{ mt: 2 }}
                    error={(touched.password && errors.password) ? true : false}
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
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                    />
                    <FormHelperText>{touched.password && errors.password}</FormHelperText>
                </FormControl>

                <Button
                    fullWidth
                    disabled={!isValid || !dirty}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Sign In
                </Button>

                <Button
                    fullWidth
                    type="button"
                    variant="contained"
                    onClick={() => resetForm()}
                    sx={{ my: 2 }}
                >
                    Reset
                </Button>

            </form>

            <Grid container sx={{ mt: 3 }}>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} variant="body2" to="/register">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>

        </AuthLayout>
    )
}

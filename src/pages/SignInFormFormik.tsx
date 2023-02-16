import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, TextField, Link } from '@mui/material';

/* 
Uso de Formik + Material UI con componentes de Formik
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

export const SignInFormFormik = () => {

    const onSubmit = (values: FormData) => {
        console.log(values)
    }

    return (
        <AuthLayout title='Sign In'>
            <Grid
                container
                direction="column"
                sx={{
                    '& .MuiTextField-root': { my: 1 },
                    '& .MuiButton-root': { my: 1 },
                }}
            >
                <Formik
                    initialValues={INIT_FORM}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        ({ errors, touched, isValid, dirty }) => (
                            <Form>
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder='Enter password'
                                    as={TextField}
                                    variant="outlined"
                                    color="info"
                                    fullWidth
                                    error={Boolean(errors.email) && Boolean(touched.email)}
                                    helperText={<ErrorMessage name='email' />}
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder='Enter password'
                                    as={TextField}
                                    variant="outlined"
                                    color="info"
                                    fullWidth
                                    error={Boolean(errors.password) && Boolean(touched.password)}
                                    helperText={<ErrorMessage name='password' />}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="info"
                                    fullWidth
                                    disabled={!isValid || !dirty}
                                >
                                    Sign up
                                </Button>
                            </Form>
                        )
                    }
                </Formik>
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
            </Grid>
        </AuthLayout >
    )
}

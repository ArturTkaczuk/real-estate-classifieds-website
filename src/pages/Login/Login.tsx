import { Box, Button, Container, Paper, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useContext } from 'react'
import { object, ref, string } from 'yup'
import { HeadingPaper } from '../../components/styled/HeadingPaper'
import { ThemeContext } from '../../context/ThemeContext'

type LoginValuesType = {
  email: string
  password: string
}

const Login = (): JSX.Element => {
  const ThemeContextColor = useContext(ThemeContext)

  const handleSubmit = ({ email, password }: LoginValuesType) => {
    console.log({ email, password })
  }

  return (
    <Container>
      <HeadingPaper>Login</HeadingPaper>
      <Paper sx={{ maxWidth: '600px', padding: '20px' }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, formikHelpers) => {
            handleSubmit(values)
            // Reset form on submit
            // formikHelpers.resetForm()
          }}
          validationSchema={object({
            email: string().required('Email is required').email('Invalid email'),
            password: string().required('Password is required'),
          })}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Field
                  name='email'
                  type='email'
                  as={TextField}
                  variant='outlined'
                  color={ThemeContextColor}
                  label='Email'
                  error={!!errors.email && !!touched.email}
                  helperText={!!touched.email && errors.email}
                  fullWidth
                />
                <Field
                  name='password'
                  type='password'
                  as={TextField}
                  variant='outlined'
                  color={ThemeContextColor}
                  label='Password'
                  error={!!errors.password && !!touched.password}
                  helperText={!!touched.password && errors.password}
                  fullWidth
                />
                <Button
                  type='submit'
                  disabled={!dirty || !isValid}
                  fullWidth
                  variant='contained'
                  color={ThemeContextColor}
                  sx={{ height: '50px' }}
                >
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  )
}

export default Login

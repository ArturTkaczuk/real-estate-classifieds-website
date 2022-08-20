import { Box, Button, Container, Paper, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { object, ref, string } from 'yup'
import { HeadingPaper } from '../../components/styled/HeadingPaper'

type SignUpValuesType = {
  email: string
  userName: string
  password: string
  repeatPassword: string
}

export const SignUp = (): JSX.Element => {
  const handleSubmit = ({ email, userName, password }: SignUpValuesType) => {
    console.log({ email, userName, password })
  }

  return (
    <Container>
      <HeadingPaper>Register</HeadingPaper>
      <Paper sx={{ maxWidth: '600px', padding: '20px' }}>
        <Formik
          initialValues={{
            email: '',
            userName: '',
            password: '',
            repeatPassword: '',
          }}
          onSubmit={(values, formikHelpers) => {
            handleSubmit(values)
            // Reset form on submit
            // formikHelpers.resetForm()
          }}
          validationSchema={object({
            email: string().required('Email is required').email('Invalid email'),
            userName: string()
              .required('Username is required')
              .min(2, 'Username should be min. 2 characters long'),
            password: string()
              .required('Password is required')
              .min(8, 'Password should be min. 8 characters long'),
            repeatPassword: string()
              .required('Repeat password')
              .oneOf([ref('password'), null], 'Passwords must match'),
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
                  color={'success'}
                  label='Email'
                  error={!!errors.email && !!touched.email}
                  helperText={!!touched.email && errors.email}
                  fullWidth
                />
                <Field
                  name='userName'
                  type='userName'
                  as={TextField}
                  variant='outlined'
                  color={'success'}
                  label='Username'
                  error={!!errors.userName && !!touched.userName}
                  helperText={!!touched.userName && errors.userName}
                  fullWidth
                />
                <Field
                  name='password'
                  type='password'
                  as={TextField}
                  variant='outlined'
                  color={'success'}
                  label='Password'
                  error={!!errors.password && !!touched.password}
                  helperText={!!touched.password && errors.password}
                  fullWidth
                />
                <Field
                  name='repeatPassword'
                  type='password'
                  as={TextField}
                  variant='outlined'
                  color={'success'}
                  label='Repeat password'
                  error={!!errors.repeatPassword && !!touched.repeatPassword}
                  helperText={!!touched.repeatPassword && errors.repeatPassword}
                  fullWidth
                />
                <Button
                  type='submit'
                  disabled={!dirty || !isValid}
                  fullWidth
                  variant='contained'
                  color={'success'}
                  sx={{ height: '50px' }}
                >
                  Sign up
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  )
}

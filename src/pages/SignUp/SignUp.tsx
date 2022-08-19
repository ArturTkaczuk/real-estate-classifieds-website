import { Button, Container, Paper, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

const initialValues = {
  email: '',
  userName: '',
  password: '',
}

export const SignUp = (): JSX.Element => {
  return (
    <Container>
      <Paper>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            console.log(values)
            formikHelpers.resetForm()
          }}
          validationSchema={object({
            email: string().required('Email is required').email('Invalid email'),
            userName: string()
              .required('Username is required')
              .min(2, 'Username should be min. 2 characters long'),
            password: string()
              .required('Email is required')
              .min(8, 'Password should be min. 8 characters long'),
          })}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
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
              <Button type='submit' disabled={!dirty || !isValid} fullWidth>
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  )
}

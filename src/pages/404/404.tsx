import { Container, Paper, Typography } from '@mui/material'

export const Error404 = (): JSX.Element => {
  return (
    <Container>
      <Paper sx={{ margin: '20px 0', width: 'fit-content', padding: '20px' }}>
        <Typography component='h1' variant='h3'>
          Error 404
        </Typography>
      </Paper>
      <Paper>
        <Typography component='h2' variant='h5' sx={{ width: 'fit-content', padding: '20px' }}>
          The page you are looking for does not exist. Your address has been entered incorrectly or
          the page has been moved.
        </Typography>
      </Paper>
    </Container>
  )
}

import { Container, Paper, Typography } from '@mui/material'
import { HeadingPaper } from '../../components/styled/HeadingPaper'

export const Error404 = (): JSX.Element => {
  return (
    <Container>
      <HeadingPaper>Error 404</HeadingPaper>
      <Paper>
        <Typography component='h2' variant='h5' sx={{ width: 'fit-content', padding: '20px' }}>
          The page you are looking for does not exist. Your address has been entered incorrectly or
          the page has been moved.
        </Typography>
      </Paper>
    </Container>
  )
}

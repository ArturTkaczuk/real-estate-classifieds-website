import { Paper, Typography } from '@mui/material'

export const AllOffersText = (): JSX.Element => {
  return (
    <Paper sx={{ marginBottom: '10px' }}>
      <Typography sx={{ textAlign: 'center', padding: '20px 0' }} variant='h4' component='h2'>
        All offers:
      </Typography>
    </Paper>
  )
}

import { CircularProgress, Paper, Typography } from '@mui/material'

export const LoadingOffers = (): JSX.Element => {
  return (
    <Paper
      sx={{
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Typography variant='h5' component='h2'>
        Offers Loading
      </Typography>
      <CircularProgress color='success' />
    </Paper>
  )
}
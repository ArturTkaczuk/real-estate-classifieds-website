import { CircularProgress, Paper, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const OffersLoading = (): JSX.Element => {
  const themeColor = useContext(ThemeContext)

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
      <CircularProgress color={themeColor} />
    </Paper>
  )
}

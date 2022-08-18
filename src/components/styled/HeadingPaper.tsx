import { Paper, Typography } from '@mui/material'

type HeadingPaperProps = {
  children: JSX.Element | string
}

export const HeadingPaper = ({ children }: HeadingPaperProps): JSX.Element => {
  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '25px',
        margin: '24px 0 100px 0',
        width: { xs: 'fit-content', md: '300px' },
      }}
    >
      <Typography component='h1' variant='h3'>
        {children}
      </Typography>
    </Paper>
  )
}

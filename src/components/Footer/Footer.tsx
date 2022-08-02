import { Box } from '@mui/material'
import { LogoTitle } from '../UI/LogoTitle/LogoTitle'

export const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '120px',
        padding: '15px 0',
        backgroundColor: '#fff',
      }}
    >
      <LogoTitle year={2022} />
    </Box>
  )
}

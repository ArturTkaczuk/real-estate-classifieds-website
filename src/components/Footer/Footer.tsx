import { Box } from '@mui/material'
import { LogoTitle } from '../UI/LogoTitle/LogoTitle'

export const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
        backgroundColor: '#fff',
      }}
    >
      <LogoTitle year={2022} />
    </Box>
  )
}

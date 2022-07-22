import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'

export const HamburgerButton = (): JSX.Element => {
  return (
    <Button variant='text'>
      <MenuIcon
        sx={{
          fontSize: {
            xs: '2.5rem',
          },
          cursor: 'pointer',
          color: '#000',
        }}
      />
    </Button>
  )
}

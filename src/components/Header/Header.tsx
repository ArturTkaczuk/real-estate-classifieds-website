import { useContext, useState } from 'react'
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Tooltip,
  Menu,
  Box,
  Container,
  Paper,
} from '@mui/material'
import { LogoTitle } from '../UI/LogoTitle/LogoTitle'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import styles from './Header.module.css'
import { Logout } from '@mui/icons-material'
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Header = (): JSX.Element => {
  const { isLoggedIn, logIn, logOut } = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <Container sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <Box sx={{ display: 'flex', gap: '25px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <Box
            component='img'
            sx={{
              display: { xs: 'none', sm: 'inline-block' },
              height: '50px',
              width: '82px',
            }}
            src={logo}
            alt='logo'
          />
          <LogoTitle />
        </Box>
        <IconButton
          onClick={handleClick}
          sx={{ color: '#000', width: '43px', height: '43px', marginLeft: 'auto' }}
          aria-label='settings'
        >
          <Tooltip title='Account settings'>
            <AccountCircleIcon sx={{ fontSize: '2.5rem' }} />
          </Tooltip>
        </IconButton>

        {/* This MUI component is not visible, only after click on profile icon */}
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          // onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {isLoggedIn ? (
            <div>
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My offers
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => logOut()}>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem onClick={() => logIn()}>
                <Avatar /> Login
              </MenuItem>
              <MenuItem>
                <Avatar /> Sign up
              </MenuItem>
            </div>
          )}
        </Menu>
      </Container>
    </header>
  )
}

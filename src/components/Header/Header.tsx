import { useState } from 'react'
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Stack,
  Tooltip,
  Menu,
} from '@mui/material'
import { LogoTitle } from '../UI/LogoTitle/LogoTitle'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import styles from './Header.module.scss'
import { Logout } from '@mui/icons-material'
import logo from '../../assets/images/logo.png'

// type HeaderProps = {
//   prop: string
// }

export const Header = (/*{ prop }: HeaderProps*/): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState<true | false>(true)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <Stack sx={{ gap: '25px' }} direction='row'>
          <img className={styles.logo} src={logo} alt='logo' />
          <LogoTitle />
        </Stack>
        <IconButton onClick={handleClick} sx={{ color: '#000' }} aria-label='settings'>
          <Tooltip title='Account settings'>
            <AccountCircleIcon sx={{ fontSize: '2.5rem' }} />
          </Tooltip>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
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
          {loggedIn ? (
            <div>
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My offers
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => setLoggedIn(!loggedIn)}>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem onClick={() => setLoggedIn(!loggedIn)}>
                <Avatar /> Login
              </MenuItem>
              <MenuItem>
                <Avatar /> Sign up
              </MenuItem>
            </div>
          )}
        </Menu>
      </div>
    </header>
  )
}

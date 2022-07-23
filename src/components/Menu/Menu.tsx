import { Paper, Typography } from '@mui/material'
import styles from './Menu.module.scss'
import menu from '../../assets/images/menu.jpg'

type MenuProps = {
  // prop: string
}

export const Menu = (/*{ prop }: MenuProps*/): JSX.Element => {
  return (
    <div className={styles.menu}>
      <Paper
        className={styles.textField}
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
        elevation={4}
      >
        <Typography className={styles.text} variant='h3' component='h1'>
          The best real estate classifieds platform in Poland
        </Typography>
      </Paper>
    </div>
  )
}

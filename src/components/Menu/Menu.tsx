import { Paper, Typography } from '@mui/material'
import styles from './Menu.module.scss'

export const Menu = (): JSX.Element => {
  return (
    <div className={styles.menu}>
      <div className={styles.contentWrapper}>
        <Paper
          className={styles.textField}
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          elevation={4}
        >
          <h1>The best real estate classifieds platform in Poland</h1>
        </Paper>
      </div>
    </div>
  )
}

import { Typography } from '@mui/material'
import styles from './LogoTitle.module.css'

export const LogoTitle = (): JSX.Element => {
  return (
    <Typography variant='h2' component='h2'>
      <span className={styles.greenUnderline}>
        <span className={styles.green}>Home</span>Est
      </span>
      ates
    </Typography>
  )
}

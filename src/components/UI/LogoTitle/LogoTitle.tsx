import { Typography } from '@mui/material'
import styles from './LogoTitle.module.scss'

export const LogoTitle = (): JSX.Element => {
  return (
    <Typography className={styles.logoTitle} variant='h4' component='h2'>
      <span className={styles.greenUnderline}>
        <span className={styles.green}>Home</span>Est
      </span>
      ates
    </Typography>
  )
}

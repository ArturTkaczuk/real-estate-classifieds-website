import { Typography } from '@mui/material'
import styles from './LogoTitle.module.css'

interface LogoTitleProps {
  year?: number
}

export const LogoTitle = ({ year }: LogoTitleProps): JSX.Element => {
  return (
    <Typography className={styles.logoTitle} variant='h4' component='h2'>
      <span className={styles.greenUnderline}>
        <span className={styles.green}>Home</span>Est
      </span>
      ates {year}
    </Typography>
  )
}

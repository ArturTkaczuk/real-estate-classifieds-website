import { Container, Paper } from '@mui/material'
import { SearchFilter } from '../SearchFilter/SearchFilter'
import styles from './Menu.module.css'

export const Menu = (): JSX.Element => {
  return (
    <div className={styles.menu}>
      <Container>
        <Paper
          component='h1'
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '25px',
            margin: '24px 24px 0 0',
            fontWeight: '400',
            fontSize: '3rem',
            width: { md: '300px' },
          }}
          elevation={4}
        >
          The best real estate classifieds platform in Poland
        </Paper>
        <SearchFilter />
      </Container>
    </div>
  )
}

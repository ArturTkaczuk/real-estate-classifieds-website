import { HamburgerButton } from '../UI/HamburgerButton/HamburgerButton'
import { LogoTitle } from '../UI/LogoTitle/LogoTitle'
import styles from './Header.module.scss'

type HeaderProps = {
  // prop: string
}

export const Header = (/*{ prop }: HeaderProps*/): JSX.Element => {
  return (
    <div className={styles.header}>
      <LogoTitle />
      <HamburgerButton />
    </div>
  )
}

// import React from 'react'

import styles from './Header.module.css'

type HeaderProps = {
  // prop: string
}

export const Header = (/*{ prop }: HeaderProps*/): JSX.Element => {
  return (
    <div className={styles.header}>
      <h2>Header</h2>
    </div>
  )
}

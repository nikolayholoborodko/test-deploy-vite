import React from 'react'
import styles from './styles.module.scss'

export const Header = ({ title }) => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.header__title}>{title}</h2>
      </div>
    </div>
  )
}

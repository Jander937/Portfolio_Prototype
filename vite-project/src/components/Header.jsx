import React from 'react'
import { Video } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Video size={24} />
        <span>VideoEditorPro</span>
      </div>
      <nav className={styles.nav}>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
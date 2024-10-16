import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Crafting Compelling Visual Stories</h1>
      <p>Professional Video Editing Services</p>
      <a href="#contact" className={styles.cta}>Get in Touch</a>
    </section>
  )
}

export default Hero
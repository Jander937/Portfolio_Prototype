import React from 'react'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Corporate Promo', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, title: 'Music Video', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, title: 'Short Film', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80' },
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
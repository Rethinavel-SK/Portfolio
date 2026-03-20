import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    icon: '🏨', title: 'Hotel Management System',
    desc: 'Full-stack hotel system with room booking, reservations, and admin dashboard. Built with JWT auth, bcrypt encryption, and MVC architecture.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Rethinavel-SK', live: '#',
  },
  {
    icon: '🎵', title: 'Mood Based Playlist Generator',
    desc: 'Analyzes user mood inputs to curate personalized playlists using Python mood classification and Spotify API integration.',
    tags: ['Python', 'Flask', 'MongoDB', 'Spotify API', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Rethinavel-SK', live: '#',
  },
  {
    icon: '📚', title: 'Learning Management System',
    desc: 'LMS enabling students and instructors to manage courses, assignments, and progress with role-based access control.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'REST APIs'],
    github: 'https://github.com/Rethinavel-SK', live: '#',
  },
  {
    icon: '📦', title: 'Campus Store Inventory',
    desc: 'Java-based inventory management system with CRUD operations, automated stock updates, and low-stock alerts using JDBC and MySQL.',
    tags: ['Java', 'JDBC', 'MySQL', 'SQL'],
    github: 'https://github.com/Rethinavel-SK', live: '#',
  },
]

export default function Projects() {
  const cardRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible) })
    }, { threshold: 0.15 })
    cardRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={styles.card}
            ref={el => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={styles.header}>
              <span className={styles.icon}>{p.icon}</span>
              <div className={styles.links}>
                <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

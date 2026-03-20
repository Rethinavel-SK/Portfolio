import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = ['about', 'skills', 'platforms', 'projects', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const current = links.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 120 && bottom >= 120
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>&lt;Rethinavel SK /&gt;</div>
      <ul className={styles.links}>
        {links.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? styles.active : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

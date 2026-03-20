import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import profilePhoto from '../assets/WhatsApp Image 2026-03-20 at 8.25.45 PM.jpeg'

const badges = ['React', 'Java', 'C++', 'Node.js']

export default function Hero() {
  const titleRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const roles = ['Computer Science Student', 'Full Stack Developer', 'Competitive Programmer']
    let ri = 0, ci = 0, deleting = false
    const el = titleRef.current
    const tick = () => {
      const word = roles[ri]
      el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++)
      if (!deleting && ci > word.length) { deleting = true; setTimeout(tick, 1200); return }
      if (deleting && ci < 0) { deleting = false; ri = (ri + 1) % roles.length }
      setTimeout(tick, deleting ? 60 : 100)
    }
    tick()
  }, [])

  return (
    <section className={styles.hero} id="about">
      <div className={styles.content}>
        <p className={styles.greeting}>👋 Hello, I'm</p>
        <h1 className={styles.name}>Rethinavel SK</h1>
        <h2 className={styles.typewriter} ref={titleRef}></h2>
        <p className={styles.bio}>
          B.Tech CSE student at Sri Eshwar College of Engineering (2024–2028).
          Passionate about full-stack development and competitive programming.
        </p>
        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnOutline}>Contact Me</a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.ring}>
          <img src={profilePhoto} alt="Rethinavel SK" className={styles.avatar} />
        </div>
        {badges.map((b, i) => (
          <span key={b} className={`${styles.badge} ${styles[`b${i}`]}`}>{b}</span>
        ))}
      </div>
    </section>
  )
}

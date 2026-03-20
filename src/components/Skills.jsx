import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const skillData = [
  { title: 'Languages',     items: ['C', 'C++', 'Java', 'SQL'] },
  { title: 'Frontend',      items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Springboot'] },
  { title: 'Backend & DB',  items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'] },
  { title: 'Tools & Cloud', items: ['Git', 'GitHub', 'Postman', 'Vercel', 'AWS'] },
  { title: 'Core Concepts', items: ['DSA', 'OOP', 'DBMS', 'CN', 'MVC Architecture'] },
]

export default function Skills() {
  const cardRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add(styles.visible)
      })
    }, { threshold: 0.15 })
    cardRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills">
      <h2 className="section-title">Technical <span>Skills</span></h2>
      <div className={styles.grid}>
        {skillData.map((cat, i) => (
          <div
            key={cat.title}
            className={styles.card}
            ref={el => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <h3 className={styles.catTitle}>{cat.title}</h3>
            <div className={styles.tags}>
              {cat.items.map(item => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

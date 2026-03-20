import { useEffect, useRef } from 'react'
import styles from './Platforms.module.css'

const platforms = [
  {
    name: 'LeetCode', handle: '@Rethinavel_SK', icon: '🟡', theme: 'lc',
    url: 'https://leetcode.com/u/Rethinavel_SK/',
    stats: [
      { num: '72', label: 'Solved' },
      { num: '47E / 24M / 1H', label: 'Easy · Med · Hard' },
    ],
    badge: 'Rank #1,886,074 🏆',
  },
  {
    name: 'Codeforces', handle: '@rethinavel_sk', icon: '🔵', theme: 'cf',
    url: 'https://codeforces.com/profile/rethinavel_sk',
    stats: [
      { num: 'New', label: 'Account' },
      { num: '—', label: 'Rating' },
    ],
    badge: 'Newbie 🌱',
  },
  {
    name: 'CodeChef', handle: '@rethinavel_sk', icon: '🟤', theme: 'cc',
    url: 'https://www.codechef.com/users/rethinavel_sk',
    stats: [
      { num: '—', label: 'Rating' },
      { num: '—', label: 'Stars' },
    ],
    badge: 'View Profile 👀',
  },
  {
    name: 'GitHub', handle: '@Rethinavel-SK', icon: '⚫', theme: 'gh',
    url: 'https://github.com/Rethinavel-SK',
    stats: [
      { num: '15', label: 'Repos' },
      { num: '2024', label: 'Joined' },
    ],
    badge: 'Open Source 🐙',
  },
  {
    name: 'HackerRank', handle: '@skrethinavel29', icon: '🟢', theme: 'hr',
    url: 'https://www.hackerrank.com/profile/skrethinavel29',
    stats: [
      { num: '5★', label: 'Problem Solving' },
      { num: 'Gold', label: 'Badge' },
    ],
    badge: '5 Star 🌟',
  },
]

export default function Platforms() {
  const cardRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible) })
    }, { threshold: 0.1 })
    cardRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="platforms">
      <h2 className="section-title">Coding <span>Platforms</span></h2>
      <div className={styles.grid}>
        {platforms.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} ${styles[p.theme]}`}
            ref={el => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className={styles.icon}>{p.icon}</div>
            <h3>{p.name}</h3>
            <p className={styles.handle}>{p.handle}</p>
            <div className={styles.stats}>
              {p.stats.map(s => (
                <div key={s.label}>
                  <span className={styles.num}>{s.num}</span>
                  <span className={styles.label}>{s.label}</span>
                </div>
              ))}
            </div>
            <span className={styles.badge}>{p.badge}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

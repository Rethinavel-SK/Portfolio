import styles from './Contact.module.css'

const links = [
  { label: '📧 Email Me',        href: 'mailto:skrethinavel29@gmail.com' },
  { label: '💼 LinkedIn',        href: 'https://www.linkedin.com/in/rethinavel-sk-31071332b/' },
  { label: '🐙 GitHub',          href: 'https://github.com/Rethinavel-SK' },
  { label: '📄 Download Resume', href: '/Rethinavel_SK Resume.pdf', primary: true },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className={styles.sub}>I'm open to internships, collaborations, and exciting opportunities!</p>
      <div className={styles.links}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className={`${styles.btn} ${l.primary ? styles.primary : ''}`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed & Built by <span>Rethinavel SK</span> · {new Date().getFullYear()}</p>
    </footer>
  )
}

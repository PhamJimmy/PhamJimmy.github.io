import styles from '@/styles/Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <a className={styles.link} href='#home'>
        HOME
      </a>
      <a className={styles.link} href='#projects'>
        PROJECTS
      </a>
      <a className={styles.link} href='#recommendations'>
        RECOMMENDATIONS
      </a>
      <a className={styles.link} href='#contact'>
        CONTACT
      </a>
    </div>
  );
}

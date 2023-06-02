import styles from '@/styles/Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <p>HOME</p>
      <p>PROJECTS</p>
      <p>CONTACT</p>
    </div>
  );
}

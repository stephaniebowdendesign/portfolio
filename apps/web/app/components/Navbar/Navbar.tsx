import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navName}>Stephanie Bowden</Link>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
        <button className={styles.menuIcon} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

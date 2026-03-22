import styles from "./SocialBar.module.css";

export function SocialBar() {
  return (
    <div className={styles.socialBar}>
      <a
        href="https://www.linkedin.com/in/stephanieclearydesign/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        LinkedIn
      </a>
    </div>
  );
}

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={styles.page}>
      <a href="mailto:stephaniebowdendesign@gmail.com" className={styles.link}>
        stephaniebowdendesign@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/stephanieclearydesign/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        LinkedIn
      </a>
    </main>
  );
}

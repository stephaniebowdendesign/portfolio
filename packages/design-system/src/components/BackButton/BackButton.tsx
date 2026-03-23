import styles from "./BackButton.module.css";

interface BackButtonProps {
  href: string;
  label?: string;
}

export function BackButton({ href, label = "Back" }: BackButtonProps) {
  return (
    <a href={href} className={styles.button}>
      <span className={styles.arrow}>←</span>
      {label}
    </a>
  );
}

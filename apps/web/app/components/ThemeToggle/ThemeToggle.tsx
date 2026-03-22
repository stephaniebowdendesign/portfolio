"use client";

import { useTheme } from "../ThemeProvider/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} className={styles.toggle} aria-label="Toggle theme">
      <span className={theme === "light" ? styles.active : styles.inactive}>Light</span>
      <span className={theme === "dark" ? styles.active : styles.inactive}>Dark</span>
    </button>
  );
}

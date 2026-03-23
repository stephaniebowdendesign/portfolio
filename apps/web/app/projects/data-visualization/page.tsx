import { Text, BackButton } from "@design-system";
import styles from "../project-page.module.css";

export default function DataVisualization() {
  return (
    <main className={styles.page}>
      <BackButton href="/projects" />
      <Text variant="heading" className={styles.title}>
        Data Visualization
      </Text>
      <p className={styles.description}>
        End-to-end product design for a neobank targeting first-time investors. Focused on
        simplifying complex financial data into an intuitive, accessible experience.
      </p>
    </main>
  );
}

import { Text, BackButton } from "@design-system";
import styles from "../project-page.module.css";

export default function CustomerSupport() {
  return (
    <main className={styles.page}>
      <BackButton href="/projects" />
      <Text variant="heading" className={styles.title}>
        Customer Support
      </Text>
      <p className={styles.description}>
        Visual identity and brand guidelines for a sustainable lifestyle startup — spanning logo,
        typography, colour system, and digital asset templates.
      </p>
    </main>
  );
}

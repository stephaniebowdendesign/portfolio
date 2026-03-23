import { Text, BackButton } from "@design-system";
import styles from "../project-page.module.css";

export default function AscentDesignSystem() {
  return (
    <main className={styles.page}>
      <BackButton href="/projects" />
      <Text variant="heading" className={styles.title}>
        Ascent Design Systems
      </Text>
      <p className={styles.description}>
        Built a scalable component library and token-based design system from scratch for a SaaS
        platform, enabling consistent UI across web and mobile products.
      </p>
    </main>
  );
}

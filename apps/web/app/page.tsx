import { Text, RotatingText } from "@design-system";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.blob} />

<div className={styles.content}>
          {/* Left sidebar */}
          <div className={styles.leftBar}>
            <ThemeToggle />
            <div className={styles.scrollLabel}>
              Scroll
              <div className={styles.scrollLine} />
            </div>
          </div>

          {/* Center */}
          <div className={styles.mainContent}>
            <div className={styles.heroText}>
              <div className={styles.heroTextInner}>
                <Text variant="display">
                  <RotatingText
                    words={["Product", "AI", "UX"]}
                    className={styles.gradient}
                  />
                </Text>
                <Text variant="display">Design.</Text>
              </div>
            </div>

            <div className={styles.bottomContent}>
              <span className={styles.aboutLabel}>About</span>
              <Text variant="body">
                Product Designer with a diverse set of skills across a variety
                of industries. Experience bringing products and digital assets to
                life from concept to execution. Adaptive individual with the
                ability to translate a company&apos;s visual language into
                functional, consistent, and beautiful products across all
                platforms.
              </Text>
              <a href="/projects" className={styles.cta}>
                View projects &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

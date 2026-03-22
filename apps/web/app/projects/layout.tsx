import { Text } from "@design-system";
import { ProjectTabs } from "./components/ProjectTabs/ProjectTabs";
import styles from "./projects.module.css";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <Text variant="heading">Projects</Text>
      <ProjectTabs />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

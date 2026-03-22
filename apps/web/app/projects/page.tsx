import { ProjectCard } from "@design-system";
import styles from "./projects.module.css";

const PROJECTS = [
  {
    title: "Ascent Design Systems",
    description:
      "Built a scalable component library and token-based design system from scratch for a SaaS platform, enabling consistent UI across web and mobile products.",
    tags: ["Design Systems", "Figma", "Web"],
    placeholderStyle: {
      background: "linear-gradient(135deg, #3b1fd4 0%, #7c3aed 50%, #c026d3 100%)",
    },
  },
  {
    title: "Data Visualization",
    description:
      "End-to-end product design for a neobank targeting first-time investors. Focused on simplifying complex financial data into an intuitive, accessible experience.",
    tags: ["Product Design", "iOS", "Fintech"],
    placeholderStyle: {
      background: "linear-gradient(135deg, #f4956a 0%, #e8799a 55%, #b85fc4 100%)",
    },
  },
  {
    title: "Customer Support",
    description:
      "Visual identity and brand guidelines for a sustainable lifestyle startup — spanning logo, typography, colour system, and digital asset templates.",
    tags: ["Branding", "Art Direction", "Print"],
    placeholderStyle: {
      background: "linear-gradient(135deg, #0f766e 0%, #0891b2 50%, #6366f1 100%)",
    },
  },
];

export default function ProductDesign() {
  return (
    <div className={styles.grid}>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

import { ProjectCard } from "@design-system";
import styles from "../../projects.module.css";

const AI_PROJECTS = [
  {
    title: "AI Onboarding Flow",
    description: "Designed a conversational onboarding experience using LLM-powered prompts to personalise the user journey in real time.",
    tags: ["UX", "LLM", "Onboarding"],
    placeholderStyle: { background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)" },
  },
  {
    title: "Smart Form Builder",
    description: "AI-assisted form creation tool that suggests field types and validation rules based on natural language descriptions.",
    tags: ["Product Design", "AI", "SaaS"],
    placeholderStyle: { background: "linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)" },
  },
  {
    title: "Sentiment Dashboard",
    description: "Real-time dashboard visualising customer sentiment analysis from support tickets, surfacing trends for product teams.",
    tags: ["Data Viz", "NLP", "Dashboard"],
    placeholderStyle: { background: "linear-gradient(135deg, #065f46 0%, #0891b2 100%)" },
  },
  {
    title: "AI Writing Assistant",
    description: "In-app writing tool with contextual suggestions powered by GPT, designed to reduce time-to-publish for content teams.",
    tags: ["AI", "Content", "SaaS"],
    placeholderStyle: { background: "linear-gradient(135deg, #be185d 0%, #e8799a 100%)" },
  },
  {
    title: "Generative Image Tool",
    description: "A prompt-to-asset tool that lets designers generate and iterate on visual concepts directly inside a Figma-adjacent workflow.",
    tags: ["Generative AI", "Design Tools"],
    placeholderStyle: { background: "linear-gradient(135deg, #4c1d95 0%, #b85fc4 50%, #f4956a 100%)" },
  },
  {
    title: "Predictive Search UX",
    description: "Redesigned search experience using ML-powered predictions to surface relevant results before the user finishes typing.",
    tags: ["Search", "ML", "UX"],
    placeholderStyle: { background: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)" },
  },
  {
    title: "AI Code Review UI",
    description: "Interface design for an AI-powered code review tool, helping developers understand and act on automated suggestions.",
    tags: ["Developer Tools", "AI", "Web"],
    placeholderStyle: { background: "linear-gradient(135deg, #134e4a 0%, #6366f1 100%)" },
  },
  {
    title: "Accessibility Auditor",
    description: "AI tool that scans product screens and generates prioritised accessibility reports with suggested design fixes.",
    tags: ["A11y", "AI", "Design Ops"],
    placeholderStyle: { background: "linear-gradient(135deg, #7f1d1d 0%, #e8799a 100%)" },
  },
  {
    title: "Chatbot Design System",
    description: "Component library and conversation design patterns for building consistent AI chat interfaces across products.",
    tags: ["Design Systems", "Conversational AI"],
    placeholderStyle: { background: "linear-gradient(135deg, #1e3a5f 0%, #0891b2 50%, #6366f1 100%)" },
  },
];

export default function AIProjects() {
  return (
    <div className={styles.grid}>
      {AI_PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

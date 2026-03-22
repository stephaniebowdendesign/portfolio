"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ProjectTabs.module.css";

const TABS = [
  { label: "Product Design", href: "/projects" },
  { label: "AI Projects", href: "/projects/ai" },
];

export function ProjectTabs() {
  const pathname = usePathname();

  return (
    <nav className={styles.tabs}>
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={pathname === tab.href ? styles.active : styles.tab}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

import React from "react";
import styles from "./Text.module.css";

type TextVariant = "display" | "heading" | "subheading" | "body";

const variantTag: Record<TextVariant, keyof React.JSX.IntrinsicElements> = {
  display: "h1",
  heading: "h2",
  subheading: "h3",
  body: "p",
};

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
}

export function Text({ variant, children, className }: TextProps) {
  const Tag = variantTag[variant];
  return (
    <Tag className={[styles[variant], className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}

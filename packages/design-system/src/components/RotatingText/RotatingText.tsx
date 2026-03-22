"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingText.module.css";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({ words, interval = 2500, className }: RotatingTextProps) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => {
        setPrevious(i);
        return (i + 1) % words.length;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const cls = (s: string) => [s, className].filter(Boolean).join(" ");

  return (
    <span className={styles.wrapper}>
      <span className={styles.sizer} aria-hidden>{longest}</span>
      {previous !== null && (
        <span key={`out-${previous}`} className={cls(styles.wordOut)}>
          {words[previous]}
        </span>
      )}
      <span key={`in-${current}`} className={cls(styles.wordIn)}>
        {words[current]}
      </span>
    </span>
  );
}

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  placeholderStyle?: React.CSSProperties;
  tags?: string[];
  href?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  placeholderStyle,
  tags,
  href = "#",
}: ProjectCardProps) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.image}>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className={styles.placeholder} style={placeholderStyle} />
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

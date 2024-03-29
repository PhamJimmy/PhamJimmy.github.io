import Image from 'next/image';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack?: string;
  github?: string;
  demo?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, stack, github, demo }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} width={400} height={200} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      {stack && (
        <p className={styles.stack}>
          <span style={{ fontWeight: 600 }}>Tech stack:</span> {stack}
        </p>
      )}
      {github && (
        <a target='_blank' className={styles.github} href={github}>
          <button>GitHub Repo</button>
        </a>
      )}
      {demo && (
        <a target='_blank' className={styles.demo} href={demo}>
          <button>Live Demo</button>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;

import Image from 'next/image';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string;
  github?: string;
  demo?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, stack, github, demo }) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={400} height={200} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Tech stack: {stack}</p>
      {github && <a href={github}>GitHub Repo</a>}
      {demo && <a href={demo}>Live Demo</a>}
    </div>
  );
};

export default ProjectCard;

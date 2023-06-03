import styles from '@/styles/Projects.module.css';
import ProjectCard from './ProjectCard';

const PersonalPortfolio = () => {
  return (
    <ProjectCard
      title='Personal Portfolio'
      description='Kind of meta, but this personal portfolio was of course developed by me!'
      stack='Typescript, ReactJs, NextJs'
      image='/../public/personal-portfolio.png'
      github='/'
      demo='/'
    />
  );
};

interface ProjectsProps {
  id: string;
}

export const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <div id={id} className={styles.wrapper}>
      <h1>Projects</h1>
      <p>These are examples of my work that I have done on personal projects or part of a job.</p>
      <div className={styles.projects}>
        <PersonalPortfolio />
        <PersonalPortfolio />
        <PersonalPortfolio />
      </div>
    </div>
  );
};

import styles from '@/styles/Projects.module.css';
import ProjectCard from './ProjectCard';

export function Projects() {
  return (
    <div className={styles.wrapper}>
      <h1>Projects</h1>
      <p>These are the projects I developed or websites I have helped work on during a job.</p>
      <ProjectCard
        title='Personal Portfolio'
        description='Kind of meta, but this personal portfolio was of course developed by me!'
        stack='Typescript, ReactJs, NextJs'
        image='https://avatars.githubusercontent.com/u/35932463?v=4'
      />
    </div>
  );
}

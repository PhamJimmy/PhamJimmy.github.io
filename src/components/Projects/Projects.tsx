import styles from '@/styles/Projects.module.css';
import ProjectCard from './ProjectCard';

const MindKind = () => {
  return (
    <ProjectCard
      title="MindKind"
      description="MindKind is a marketplace where local businesses offer opportunities for people to build and influence their community. 
      I was a full stack software engineer that built mobile responsive views and implemented new API routes."
      stack="Typescript, ReactJs, NextJs, TailwindCSS, NodeJs, ExpressJs, MySQL"
      image="/mindkind.png"
      demo="https://mindkind.life/"
    />
  );
};

const PersonalPortfolio = () => {
  return (
    <ProjectCard
      title="Personal Portfolio"
      description="Kind of meta, but this personal portfolio was of course developed by me! 
      This helped me to better solidify my knowledge of Typescript, ReactJs, and NextJs.
      This is an ongoing project and will be updated whenever I work on something new and cool."
      stack="Typescript, ReactJs, NextJs"
      image="/personal-portfolio.png"
      github="https://github.com/PhamJimmy/PhamJimmy.github.io"
    />
  );
};

const Dubsado = () => {
  return (
    <ProjectCard
      title="Dubsado"
      description="Dubsado is a business management suite for creative entrepreneurs. 
      I worked on the client-facing side of the application. 
      I migrated entire views from legacy AngularJS to ReactJs and helped to develop the new design system via Storybook."
      stack="Typescript, ReactJs, MongoDB, NodeJs, ExpressJs, GraphQL, Apollo, Storybook"
      image="/dubsado.png"
      demo="https://hello.dubsado.com/"
    />
  );
};

const PeriodicTables = () => {
  return (
    <ProjectCard
      title="Periodic Tables"
      description="Periodic Tables is a restaurant reservation system.
      It allows restaurants to fully manage their table reservations and current seating.
      This was my first full-stack application, built all by myself."
      stack="Javascrit, ReactJs, NodeJs, ExpressJs, PostgreSQL, KnexJs, Bootstrap"
      image="/periodic-tables.png"
      github="https://github.com/PhamJimmy/restaurant-reservation-system"
      demo="https://restaurant-reservation-system-frontend.vercel.app/dashboard"
    />
  );
};

const GitHub = () => {
  return (
    <ProjectCard
      title="GitHub"
      description="Check out my other repositories on Github to see what else I have been working on!"
      image="/mygithub.png"
      github="https://github.com/PhamJimmy/"
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
        <MindKind />
        <PersonalPortfolio />
        <Dubsado />
        <PeriodicTables />
        <GitHub />
      </div>
    </div>
  );
};

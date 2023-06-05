import styles from '@/styles/Recommendations.module.css';
import { Recommendation } from './Recommendation';

interface RecommendationsProps {
  id: string;
}

const Justin: React.FC = () => {
  return (
    <Recommendation
      name='Justin'
      text={
        <p>
          I had the pleasure of having Jimmy on my team, working on redesigning the sign up and login flow. His
          <span className={styles.highlight}> attention to detail</span> allowed him to quickly pickup on the processes,
          patterns and styles used by the team and implement them himself. <br />
          <br /> He is a quick study and <span className={styles.highlight}>isn&#39;t afraid to ask questions</span>
          for clarification, which allowed me to quickly build <span className={styles.highlight}>trust</span> in his
          abilities. I was able to delegate the{' '}
          <span className={styles.highlight}>building of complex React views and components</span> that required him to
          learn new patterns and technologies and
          <span className={styles.highlight}> he&#39;d always deliver</span>. <br />
          <br /> I truly enjoyed working with Jimmy and highly recommend him as a software engineer and a fantastic
          teammate!
        </p>
      }
      image='/justin.jpeg'
    />
  );
};

const Ngon: React.FC = () => {
  return (
    <Recommendation
      name='Ngon'
      text={
        <p>
          I had the honor of collaborating with Jimmy on several projects. In the time I&#39;ve known him, Jimmy has
          consistently been a <span className={styles.highlight}>strong learner</span> capable of taking control of big
          projects and executing them to the fullest. As well, he&#39;s a pleasure to work with. <br />
          <br />
          Jimmy is committed in the face of daunting deadlines and is always available to{' '}
          <span className={styles.highlight}>lend a hand</span> to teammates when necessary. I highly recommend Jimmy to
          any employer, he would be an asset to any organization.
        </p>
      }
      image='/ngon.jpeg'
    />
  );
};

export const Recommendations: React.FC<RecommendationsProps> = ({ id }) => {
  return (
    <div id={id} className={styles.container}>
      <h1>Referrals & Testimonials</h1>
      <p>Here&#39;s some nice things people who have worked with me are saying!</p>
      <div className={styles.recommendations}>
        <Justin />
        <Ngon />
      </div>
    </div>
  );
};

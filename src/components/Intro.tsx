import styles from '@/styles/Intro.module.css';
import Image from 'next/image';

interface IntroProps {
  id: string;
}

export const Intro: React.FC<IntroProps> = ({ id }) => {
  return (
    <main id={id} className={styles.wrapper}>
      <div className={styles.mainCard}>
        <div className={styles.introduction}>
          <div>
            <h1>Hi there 👋</h1>
            <h1>
              I&#39;m <span className={styles.accentText}>Jimmy</span>
            </h1>
          </div>
          <h1>
            I am a <span className={styles.accentText}>Software Engineer</span> based in Southern California.
          </h1>
        </div>
        <div className={styles.profileContainer}>
          <Image
            className={styles.profile}
            src='/../public/jimmy.png'
            width={400}
            height={600}
            quality={100}
            alt='profile'
          />
        </div>
      </div>
    </main>
  );
};

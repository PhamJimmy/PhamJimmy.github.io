import styles from '@/styles/Intro.module.css';
import Image from 'next/image';

export function Intro() {
  return (
    <main className={styles.wrapper}>
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
        <Image
          className={styles.profile}
          src='/../public/jimmy.png'
          width={400}
          height={600}
          quality={100}
          alt='profile'
        />
      </div>
    </main>
  );
}

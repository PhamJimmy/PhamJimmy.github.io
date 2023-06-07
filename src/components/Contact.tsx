import styles from '@/styles/Contact.module.css';
import Image from 'next/image';

interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <div id={id} className={styles.wrapper}>
      <div className={styles.contactBox}>
        <h1>Get in touch with me</h1>
        <p>Email me, or check out my other links below!</p>
      </div>
      {/* Links with a logo and text to link to my github, linkedin, or other sites */}
      <div className={styles.links}>
        <a target='_blank' href='https://github.com/PhamJimmy' className={styles.link}>
          <Image src='/github.png' width={100} height={100} alt='github' />
          <p>github.com/PhamJimmy</p>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/jimmy-pham-res/' className={styles.link}>
          <Image src='/linkedin.png' width={100} height={100} alt='linkedin' />
          <p>linkedin.com/in/jimmy-pham-res/</p>
        </a>
        <a target='_blank' href='mailto: JimmyPhamRes@gmail.com' className={`${styles.link} ${styles.email}`}>
          <Image src='/email.png' width={100} height={100} alt='email' />
          <p>JimmyPhamRes@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

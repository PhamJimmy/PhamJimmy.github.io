import Head from 'next/head';
import styles from '@/styles/index.module.css';
import { Intro, Background, Navbar, Projects, Contact } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jimmy Pham&#39;s Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Background />
        <Intro id='home' />
        <Projects id='projects' />
        <Contact id='contact' />
      </main>
    </>
  );
}

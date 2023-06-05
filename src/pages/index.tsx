import Head from 'next/head';
import { Intro, Background, Navbar, Projects, Contact, Recommendations } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jimmy Pham&#39;s Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        {/* <Navbar /> */} {/* Enable navbar if the page gets more extensive */}
        <Background />
        <Intro id='home' />
        <Projects id='projects' />
        <Recommendations id='recommendations' />
        <Contact id='contact' />
      </main>
    </>
  );
}

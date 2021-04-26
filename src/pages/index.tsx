import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>pete beegle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-gray-900 dark:text-white">pete beegle</h1>
        <div className="text-gray-600 dark:text-gray-300">
          <Link href="https://github.com/petebeegle">
            <a>github</a>
          </Link>{' '}
          <Link href="https://gitlab.com/petebeegle">
            <a>gitlab</a>
          </Link>{' '}
          <Link href="https://www.linkedin.com/in/pete-beegle/">
            <a>linkedin</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

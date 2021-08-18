import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>pete beegle</title>
    </Head>
    <div className="bg-white dark:bg-gray-800">
      <Component {...pageProps} />
    </div>
  </>
);

export default MyApp;

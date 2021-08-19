import { AppProps, NextWebVitalsMetric } from 'next/app';
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

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  const { id, name, label, value } = metric;
  (window as any).gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
};

export default MyApp;

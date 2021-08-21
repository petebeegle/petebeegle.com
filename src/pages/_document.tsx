import InitializeDarkMode from '@element/InitializeDarkMode/InitializeDarkMode';
import Analytics from '@module/Analytics/Analytics';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <Analytics />
          <InitializeDarkMode />
        </Head>
        <body className="bg-white dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

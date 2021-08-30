import InitializeDarkMode from '@element/InitializeDarkMode/InitializeDarkMode';
import Analytics from '@module/Analytics/Analytics';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Analytics />
          <InitializeDarkMode />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

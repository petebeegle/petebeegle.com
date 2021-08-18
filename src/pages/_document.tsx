import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
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

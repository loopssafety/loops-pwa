import { Html, Head, Main, NextScript } from 'next/document';
import { Meta } from '@components/index';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <Meta />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

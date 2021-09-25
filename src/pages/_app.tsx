import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';
import Providers from './Providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>Application Title</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="App description." />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </Providers>
  );
}

export default App;

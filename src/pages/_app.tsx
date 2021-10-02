import { AppProps } from 'next/app';
import Head from 'next/head';

import '../../tailwind.css';
import GlobalStyles from 'styles/global';
import Providers from './Providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>Truckeria App</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="App description." />
        <link rel="stylesheet" href="https://use.typekit.net/jll4squ.css" />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </Providers>
  );
}

export default App;

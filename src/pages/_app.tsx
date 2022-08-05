import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { AuthProvider, useAuth, ProtectRoute } from 'hooks/useAuth';

import '../styles/reset.css';

function App({ Component, pageProps, router }: AppProps) {
  const { fetcher } = useAuth();

  return (
    <>
      <Head>
        <title>Truckeria - Sistema administração</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6F52" />
        <meta name="description" content="Gerencie os seus food-trucks" />
      </Head>

      <AuthProvider>
        <ProtectRoute router={router}>
          <SWRConfig value={{ fetcher }}>
            <Component {...pageProps} />
          </SWRConfig>
        </ProtectRoute>
      </AuthProvider>
    </>
  );
}

export default App;

import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';

import { theme } from 'styles/theme';

function App({ Component, pageProps, cookies }: AppProps) {
  return (
    <>
      <Head>
        <title>Application Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="App description." />
      </Head>

      <ChakraProvider
        theme={theme}
        colorModeManager={
          typeof cookies === 'string'
            ? cookieStorageManager(cookies)
            : localStorageManager
        }
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;

// App.getInitialProps = ({ req:  }) => {
//   return {
//     cookies: req.headers.cookie ?? '',
//   };
// };

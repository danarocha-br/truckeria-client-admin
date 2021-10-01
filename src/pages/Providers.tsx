import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'styles/themes';

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  const { value } = useDarkMode(false, {
    storageKey: undefined,
    onChange: undefined,
  });
  const theme = value ? lightTheme : darkTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Providers;

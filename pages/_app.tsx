import '../app/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ErrorProvider } from '../app/components/modules/globalError/globalError.provider';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <ErrorProvider>
      <Component {...pageProps} />
    </ErrorProvider>
  </>
);

export default MyApp;

import '../app/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ErrorProvider } from '../app/components/modules/globalError/globalError.provider';
import UserProvider from '../app/context/User/UserProvider';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <ErrorProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ErrorProvider>
  </>
);

export default MyApp;

import '../app/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import UserProvider from '../app/context/User/UserProvider';
import GlobalErrorProvider from '../app/context/GlobalError/GlobalErrorProvider';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalErrorProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </GlobalErrorProvider>
  </>
);

export default MyApp;

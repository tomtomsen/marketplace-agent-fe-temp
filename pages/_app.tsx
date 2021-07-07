import '../app/styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorProvider } from  '../app/components/modules/globalError/globalError.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorProvider>
        <Component {...pageProps} />
      </ErrorProvider>
    </>
  );
}
export default MyApp

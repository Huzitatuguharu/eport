import '../../styles/globals.css';
// import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import adobeLoader from '../../adobeLoader';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;

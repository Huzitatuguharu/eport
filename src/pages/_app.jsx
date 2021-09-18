import '../../styles/globals.scss';
// import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import * as React from 'react';
import { useState, useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr';
import adobeLoader from '../../adobeLoader';

function MyApp({ Component, pageProps }) {
  // adobeフォントの設定
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;

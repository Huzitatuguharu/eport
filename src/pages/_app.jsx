import '../../styles/globals.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/createSupabaseClient';

function MyApp({ Component, pageProps }) {



  return <Component {...pageProps} />;
}
export default MyApp;

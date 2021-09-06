import useSWR, { SWRConfig } from 'swr';
// import getAirportAPI from '../api/supabase';
import { supabase } from '../lib/Supabase';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FirstPost() {
  const { data, error } = useSWR('../api/supabase', fetcher, { refreshInterval: 1000 });

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data[0].name}!</div>;
}

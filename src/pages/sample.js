import useSWR, { SWRConfig } from 'swr';
// import getRouteAPI from '../api/airport';
// import getAirportAPI from '../api/airport';

import { supabase } from '../lib/createSupabaseClient';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FirstPost() {
  // const { airportdata, error1 } = useSWR('../api/airport', fetcher, { refreshInterval: 1000 });
  const { data, error } = useSWR('../api/route', fetcher, { refreshInterval: 1000 });

  // console.log(airportdata);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data[85].id}!</div>;
}

import { useState, useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr';

import { supabase } from '../lib/createSupabaseClient';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useUser() {
  const { data, error } = useSWR('./api/airport.ts', fetcher);
  console.log(data);
  return {
    airportdata: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function FirstPost() {
  const { data, error } = useSWR('./api/airport.ts', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data[0].name}!</div>;

  const { airportdata, isLoading, isError } = useUser();

  if (isLoading) return <p>ロード中</p>;
  if (isError) return <p>エラー</p>;

  return (
    <div>
      <p>{airportdata[1].name}</p>;
      <Children theme={{ background: 'yellow' }} large />
    </div>
  );
}

export const Children = (props) => {
  return (
    <div>
      <p>Children Component</p>
      <style jsx>{`
        p {
          padding: ${'large' in props ? '50' : '20'}px;
          background: ${props.theme.background};
        }
      `}</style>
    </div>
  );
};

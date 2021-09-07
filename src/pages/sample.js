import { useState, useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr';

// import { supabase } from '../lib/createSupabaseClient';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// function useUser() {
//   const { data, error } = useSWR('./api/airport.ts', fetcher);
//   console.log(data);
//   return {
//     airportdata: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

export default function FirstPost() {
  return (
    <div>
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

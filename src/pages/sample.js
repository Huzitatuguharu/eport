// import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
//    const { data, error } = useSWR('./api/airport', fetcher);
// console.log(data);
//    if (error) return <div>failed to load</div>;
//    if (!data) return <div>loading...</div>;

//    return <div>hello {data.name}!</div>;
  const { data, error } = useSWR('./api/airport', fetcher);
  console.log(data);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <h1>{data[0].name}</h1>
      {/* <p>{data.description}</p> */}
      {/* <strong>👁 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '} */}
      {/* <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}

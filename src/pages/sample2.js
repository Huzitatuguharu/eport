import useSWR, { SWRConfig } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const API = 'https://api.github.com/repos/vercel/swr';
const API = '../pages/api/airport';

export async function getServerSideProps() {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo,
      },
    },
  };
}

function Repo() {
  const { data, error } = useSWR(API);

  // there should be no `undefined` state
  console.log('Is data ready?', !!data);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <h1>{data[0].name}</h1>
      {/* <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '} */}
      <strong>🍴</strong>
    </div>
  );
}

export default function App({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Repo />
    </SWRConfig>
  );
}

import useSWR, { SWRConfig } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const API = 'http://localhost:3000/src/pages/api/airport';

export async function getStaticProps() {
  // `getStaticProps` はサーバー側で実行されます
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
  // `data` は `fallback` を利用して常に利用可能です。
  console.log('Is data ready?', !!data);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <h1>{data[0].name}</h1>
    </div>
  );
}

export default function Page({ fallback }) {
  // `SWRConfig` の範囲内の SWR フックは、設定の値を使用します。
  return (
    <SWRConfig value={{ fallback }}>
      <Repo />
    </SWRConfig>
  );
}

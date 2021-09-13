import useSWR, { SWRConfig } from 'swr';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const fetcher = async () => {
//   let res;

//   if (!res.ok) {
//     const error = new Error('An error occurred while fetching the data.');

//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };
const fetcher = async (url) => {
  let res;

  res = await fetch(url);

  return res.json();
};

export const useAirport = () => {
  const options = {
    // 初期データ
    initialData: null,
    // pollingの期間（ミリ秒）
    refreshInterval: 5000,
    // windowのフォーカス時にRevalidateする
    revalidateOnFocus: true,
  };
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('../pages/api/airport', fetcher);
  console.log('data5555', data);

  return {
    airport: data,
    isLoading: !error && !data,
    isError: error,
  };
};

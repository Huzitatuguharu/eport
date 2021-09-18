import useSWR, { SWRConfig } from 'swr';

// /* ==========================================================================
//   airportData;の取得
//   ========================================================================== */

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useCompany = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/company', fetcher, { revalidateOnMount: true });
  return {
    companyData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

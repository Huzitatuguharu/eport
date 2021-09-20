import useSWR, { SWRConfig } from 'swr';

// /* ==========================================================================
//   airportData;の取得
//   ========================================================================== */

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useAirport = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/airport', fetcher, { revalidateOnMount: true });
  return {
    airportData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// /* ==========================================================================
//   路線データの取得
//   ========================================================================== */

export const useRoute = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/route', fetcher, { revalidateOnMount: true });
  return {
    routeData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// /* ==========================================================================
//   会社情報の取得
//   ========================================================================== */

export const useCompany = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/company', fetcher, { revalidateOnMount: true });
  return {
    companyData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

import { useState, useEffect, useMemo } from 'react';
import useSWR, { SWRConfig } from 'swr';
const fetcher = async (url, config) => {
  let res;

  if (config) {
    res = await fetch(url, config);
  } else {
    res = await fetch(url);
  }

  
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const useContactForm = () => {
  // SPEARLYAPI_KEYの設定

  const SPEARLYAPI_KEY = process.env.NEXT_PUBLIC_SPEARLYAPI_KEY;
  const SPEARLYCONTACT_KEY = process.env.NEXT_PUBLIC_SPEARLYCONTACT_KEY;

  const rolesUrl = 'https://www.spearly.com/api/v1/forms/f-IUKGAF758HQrnazouiES/latest';

  const rolesUrl2 = 'https://www.spearly.com/api/v1/content_types/ct-QX8UYsjcrD1xygMqwFCn/contents';

  const config = useMemo(
    () => ({
      headers: {
        // headers: { Authorization: `Bearer ${SPEARLYAPI_KEY}` },
        Authorization: `Bearer ${SPEARLYAPI_KEY}`,
      },
    }),
    [],
  );

  const { data, error } = useSWR([rolesUrl, config], fetcher);
  console.log('data', data);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

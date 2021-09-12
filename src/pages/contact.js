import axios from 'axios'; // 追加
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';

import '../../styles/spealy.module.css';

// SPEARLYAPI_KEYの設定
const SPEARLYAPI_KEY = process.env.NEXT_PUBLIC_SPEARLYAPI_KEY;
const SPEARLYCONTACT_KEY = process.env.NEXT_PUBLIC_SPEARLYCONTACT_KEY;

const rolesUrl = 'https://www.spearly.com/api/v1/forms/f-IUKGAF758HQrnazouiES/latest';

const rolesUrl2 = 'https://www.spearly.com/api/v1/content_types/ct-QX8UYsjcrD1xygMqwFCn/contents';

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

function useUser() {
  const config = useMemo(
    () => ({
      headers: {
        // headers: { Authorization: `Bearer ${SPEARLYAPI_KEY}` },
        Authorization: `Bearer ${SPEARLYAPI_KEY}`,
      },
    }),
    [],
  );
  const { data, error } = useSWR([rolesUrl2, config], fetcher);
  console.log('data', data);
  // console.log('data', data.fields);

  return {
    news: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Contact() {
  const { news, isLoading, isError } = useUser();

  if (isLoading) return <p>ローディング</p>;
  if (isError) return <p>エラー</p>;
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🙇</text></svg>'
        ></link>
        <link
          rel='stylesheet'
          href='https://static.spearly.com/css/spearly-richtext.min.css'
          type='text/css'
        ></link>
      </Head>
      <p>{news.name}</p>
      <p>{news.contents[0].fields.date.value}</p>
      <p>{news.contents[0].fields.description.value}</p>
      <p>{news.contents[0].fields.contents.value}</p>

      <style jsx>{``}</style>
    </>
  );
}

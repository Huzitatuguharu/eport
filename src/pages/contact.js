import axios from 'axios'; // 追加
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { useContactForm } from '../hooks/useGetContactForm';

import '../../styles/spealy.module.css';

export default function Contact() {
  const { news, isLoading, isError, sample } = useContactForm();
  console.log(sample);
  console.log(news);
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
      {news&&(
        <div>
          <p>{news.name}</p>
          <p>{news.contents[0].fields.date.value}</p>
          <p>{news.contents[0].fields.description.value}</p>
          <p>{news.contents[0].fields.contents.value}</p>
        </div>
      )}

      <style jsx>{``}</style>
    </>
  );
}

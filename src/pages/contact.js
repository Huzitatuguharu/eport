import axios from 'axios'; // 追加
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function contact() {
  const SPEARLYAPI_KEY = process.env.NEXT_PUBLIC_SPEARLYAPI_KEY;
  const SPEARLYCONTACT_KEY = process.env.NEXT_PUBLIC_SPEARLYCONTACT_KEY;

  // 関数の内容を編集
  let data;

  const getDataFromAPI = async () => {
    // useEffect(() => getDataFromAPI(), []);
    // const [contact, setContact] = useState([]);
    const requestUrl = 'https://spearly.com/api/v1/forms/';
    // const result = await axios.get(`${requestUrl}${SPEARLYCONTACT_KEY}/latest`);

    const config = {
      headers: { Authorization: `Bearer ${SPEARLYAPI_KEY}` },
    };
    const result = axios
      .get(`${requestUrl}${SPEARLYCONTACT_KEY}/latest`, config)
      .then((res) => {
        console.log(res);
        data = res.data;
        setContact(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
      </Head>

      {/* {contact && <h1> {contact}</h1>} */}

      <style jsx>{`
        .wrapper404 {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 20px;
        }
        .text404 {
          margin: 20px;
        }
      `}</style>
    </>
  );
}

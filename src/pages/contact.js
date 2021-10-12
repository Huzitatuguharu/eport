import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function Contact() {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🙇</text></svg>'
        ></link>
      </Head>
      
      <div className='wrapper404'>
        <h1>すまない、エラーです🙇</h1>
      </div>
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

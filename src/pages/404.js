import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
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

      <div className='wrapper404'>
        <Link href='/'>
          <a className='text404'>ホーム画面</a>
        </Link>
        <Image src='/giffycanvas.gif' alt='404' width={960} height={720} />
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

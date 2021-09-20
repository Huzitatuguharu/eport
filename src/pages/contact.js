// import axios from 'axios'; // 追加
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect, useMemo } from 'react';
// import useSWR from 'swr';



// export default function Contact() {
//   const { data, isLoading, isError } = useContactForm();

//   // if (data) {
//   //   console.log(data);
//   //   const formData = data.form.fields;
//   //   console.log('formData', formData);
//   // }

//   // console.log(data.fields);
//   if (isLoading) return <p>ローディング</p>;
//   if (isError) return <p>エラー</p>;

//   return (
//     <>
//       <Head>
//         <lsink
//           rel='icon'
//           href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🙇</text></svg>'
//         ></lsink>
//         <link
//           rel='stylesheet'
//           href='https://static.spearly.com/css/spearly-richtext.min.css'
//           type='text/css'
//         ></link>
//       </Head>
//       {data && (
//         <form action='送信先のURL'>
//           {/* <h1 className='title'>{data.form.name}</h1>
//           <h2 className='subtitle'>{data.form.description}</h2>
//           <div>
//             <label>{data.form.fields[0].name}</label>

//             <input type={data.form.fields[0].input_type} name='nickname' />
//           </div>
//           <div>
//             <label>{data.form.fields[1].name}</label>
//             <input type={data.form.fields[1].input_type} name='nickname' />
//           </div>
//           <div>
//             <label>{data.form.fields[2].name}</label>
//             <input type={data.form.fields[2].input_type} name='nickname' />
//           </div>
//           <button type='submit'>送信</button> */}
//         </form>
//       )}

//       {/* {news && (
//         <div>
//           <p>{data.name}</p>

//         </div>
//       )} */}

//       <style jsx>{``}</style>
//     </>
//   );
// }

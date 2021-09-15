import axios from 'axios'; // 追加
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { FormContent } from '../components/Form';
import { useContactForm } from '../hooks/useGetContactForm';

const DataForm = (props) => {
  const { data } = props;
  console.log(data);
};
// const todos = [
//   { id: 1, title: 'title1' },
//   { id: 2, title: 'title2' },
//   { id: 3, title: 'title3' },
//   { id: 4, title: 'title4' },
// ];

// const deleteTargetId = 3;

// const deletedArray = todos.filter((todo) => todo.id !== deleteTargetId);

// console.log(deletedArray);

// // 新しい React Component である Todos を
// // map を使って作成する

// const Todos = ({ todos }) => {
//   // 一旦 List へ、受け取った配列(todos)を元に
//   // li 要素を複数保持した、新しい配列を入れる
//   const list = todos.map((todo) => {
//     return (
//       <li>
//         {todo.id} {todo.title}
//       </li>
//     );
//   });

//   // 先ほど作った list を使用する
//   // この部分が実際にレンダリングされる内容
//   return <ul>{list}</ul>;
// };

export default function Contact() {
  const { data, isLoading, isError } = useContactForm();

  // if (data) {
  //   console.log(data);
  //   const formData = data.form.fields;
  //   console.log('formData', formData);
  // }

  // console.log(data.fields);
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
      {data && (
        <form action='送信先のURL'>
          <FormContent />
          <p>aaa</p>
          {/* <h1 className='title'>{data.form.name}</h1>
          <h2 className='subtitle'>{data.form.description}</h2>
          <div>
            <label>{data.form.fields[0].name}</label>

            <input type={data.form.fields[0].input_type} name='nickname' />
          </div>
          <div>
            <label>{data.form.fields[1].name}</label>
            <input type={data.form.fields[1].input_type} name='nickname' />
          </div>
          <div>
            <label>{data.form.fields[2].name}</label>
            <input type={data.form.fields[2].input_type} name='nickname' />
          </div>
          <button type='submit'>送信</button> */}
        </form>
      )}

      {/* {news && (
        <div>
          <p>{data.name}</p>

        </div>
      )} */}

      <style jsx>{``}</style>
    </>
  );
}

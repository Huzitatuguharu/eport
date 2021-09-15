import * as React from 'react';

import { useContactForm } from '../hooks/useGetContactForm';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export const FormContent = () => {
  const { data, isLoading, isError } = useContactForm();
  console.log(data);

  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data.name}!</div>;

  // return data?.map((input, index) => (
  //   <>
  //     <div key={`marker-${index}`}>
  //       <label>{input.form.fields.name}</label>
  //       <input type={input.form.fields.input_type} name={input.form.fields.identifier} required={input.form.fields.required }/>
  //     </div>
  //   </>
  // ));
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

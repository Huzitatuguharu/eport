import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import styles from '../styles/Home.module.css'

import { supabase } from '../lib/Supabase';

const API_KEY = process.env.NEXT_PUBLIC_MAPBOX_KEY;

const Home: NextPage = () => {
  const [place, setPlace] = useState([]);
  const onClickgetdata = async () => {
  const { data, error } = await supabase.from('airport').select();

  console.log(data);

  };
  // const [todos, setTodos] = useState([]);
  // const onClickFetchData = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
  //     setTodos(res.data);
  //     console.log(res);
  //     console.log(todos);
  //   });
  // };

  return (
    <>
      <div>
        aaxanfak
        <button onClick={onClickgetdata}>取得</button>
      </div>
    </>
  );
};

  export default Home;

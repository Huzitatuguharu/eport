import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
// import styles from '../styles/Home.module.css'

import { supabase } from '../lib/Supabase';


const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY;

const center = {
  lat: 36.5,
  lng: 137.5936,
};

const label1 = {
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '15px',
  fontWeight: '100',
  text: '12',
};

const containerStyle = {
  height: '200px',
  width: '100%',
};

 const place20 = {
   lat: 36.5,
   lng: 137.5936,
 };

const Home: NextPage = () => {

  const [place, setPlace] = useState([]);
  const onClickgetdata = async () => {
  const { data, error } = await supabase.from('airport').select();

  console.log(data);

    setPlace(data);
  };
  const [todos, setTodos] = useState([]);
  const onClickFetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data);
      console.log(res);
      console.log(todos);
    });
  };
  
  return (
     <>
      <div>
        <button onClick={onClickgetdata}>取得</button>
      </div>

     {/* GoogleMap */}
      <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        >

          {/* <Marker position={`lat:${place20.緯度},lng:${place20.経度}`} label={label1} /> */}
          <Marker position={place20} label={label1} />

  {/* todoにtodosを格納する */}
        {/* {place.map((newplace) =>(
          <p key={newplace.id}>{`lat:${newplace.緯度},lng:(${newplace.経度})`}</p>

          <Marker position={`lat:${place20.緯度},lng:(${place20.経度})`} label={label1} />

          ))} */}

      </GoogleMap>
      </LoadScript>

  </>
  )
}

export default Home

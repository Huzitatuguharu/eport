import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import MapGL from 'react-map-gl';


import { MAP } from '../components/mapbox';
import { supabase } from '../lib/Supabase';

type Airport = {
  id: number;
  iata: string;
  icao: string;
  latitude: number;
  longitude: number;
  lounge: number;
  name: string;
  prefecture: string;
  rural: string;
  url: string;
  };


const onClickgetdata = async () => {
  const { data,error } = await supabase
  .from<Airport>('Airport1')
  .select();
  console.log(data);
}

const Home: NextPage = () => {



  return (
    <>
      <div>
        <button onClick={onClickgetdata}>取得</button>
      </div>

      <MAP latitude={37} longitude={130} />
    </>
  );
};

  export default Home;

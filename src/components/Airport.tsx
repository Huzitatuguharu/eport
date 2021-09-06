
import * as React from 'react';
import { useState, useEffect } from 'react';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { supabase } from '../lib/createSupabaseClient';

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

type Maptype = {
  latitude: number;
  longitude: number;
};




export const Airport = () => {



    const onClickgetdata = async () => {
        const { data, error } = await supabase
          .from<Maptype>('airport')
          .select('latitude, longitude');
        console.log(data);
  }

  useEffect(() => {
    onClickgetdata();
    console.log('useEffectが実行されました');
  }, []);



  return (
    <>
      <div>
        <button onClick={onClickgetdata}>取得</button>
      </div>

    </>
  );
};;

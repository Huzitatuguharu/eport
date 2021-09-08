import * as React from 'react';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { supabase } from '../lib/createSupabaseClient';
import { Toairportpinchild } from './toairpotpinchild';

export const Toairportpin = (props) => {
  const { data, alldata } = props;
  const fromairport = data.id;

  const [toairportlists, setToairportlists] = useState([]);

  // let toairportlists=[];

  useEffect(() => {
    getToairportdata(fromairport, alldata);
  }, [fromairport]);

  console.log('toairportlists1', toairportlists);

  // ここからSupabaseに接続
  const getToairportdata = async (fromairport, alldata) => {
    const { data, error } = await supabase.from('route').select('to').eq('from', fromairport);
    const toairports = data.map((value) => value['to']);

    for (let i = 0; i < toairports.length; i++) {
      const matchairport = alldata.find(({ id }) => id === toairports[i]);
      toairportlists.push(matchairport);
      console.log(matchairport);
    }
    console.log('toairportlists2',toairportlists);
    setToairportlists(toairportlists);

   
  };
 return (
    <Marker
      // key={`marker-${index}`}
      // longitude={matchairport[0].longitude}
      // latitude={matchairport[1].latitude}
      longitude={135}
      latitude={35}
    >
      <IconContext.Provider value={{ color: '#fff333', size: '24px' }}>
        <RiMapPin3Fill></RiMapPin3Fill>
        <style jsx>{``}</style>
      </IconContext.Provider>
    </Marker>
  );
};

import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { supabase } from '../lib/createSupabaseClient';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Toairportpin(props) {
  const { data, alldata } = props;
  const fromairport = data.id;
  console.log('fromairport1', fromairport);
  console.log(alldata);

  // ここからSupabaseに接続
  const getToairportdata = async () => {
    const { data, error } = await supabase.from('route').select('to').eq('from', fromairport);

    console.log('fromairport2', data);
    const toairports = data.map((value) => value['to']);

    console.log('toairports', toairports);
    for (let i = 0; i < toairports.length; i++) {
      const myFirstPokemon = alldata.find(({ id }) => id === toairports[i]);
      console.log(myFirstPokemon); // { id: 0, name: 'Pikachu' }
    }
  };

  getToairportdata();

  return (
    <Marker longitude={data.longitude} latitude={data.latitude}>
      <IconContext.Provider value={{ color: '#333', size: '8px' }}>
        <RiMapPin3Fill></RiMapPin3Fill>
      </IconContext.Provider>

      <style jsx>{``}</style>
    </Marker>
  );
}

export default React.memo(Toairportpin);

import * as React from 'react';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { Toairportpinchild } from '../components/toairpotpinchild';
import { supabase } from '../lib/createSupabaseClient';

export const Toairportpin = (props) => {
  const { data, alldata } = props;
  const fromairport = data.id;

  let [fromairportlists, setFromairportlists] = useState(null);

  let [toairportlists, setToairportlists] = useState(null);


  if (toairportlists) {
    return (
      <Marker longitude={toairportlists[0].longitude} latitude={toairportlists[0].latitude}>
        <IconContext.Provider value={{ color: '#333', size: '24px' }}>
          <RiMapPin3Fill></RiMapPin3Fill>
        </IconContext.Provider>
        <style jsx>{``}</style>
      </Marker>
    );
  }
};

export default React.memo(Toairportpin);

// async function doAsync() {
//   return '値';
// }
// // doAsync関数はPromiseを返す
// doAsync().then((value) => {
//   console.log(value); // => "値"
// });

const Randomizer = () => {
  const [value, setValue] = useState(123);

  // 描画前に同期的に実行される
  useLayoutEffect(() => {
    setValue(Math.random());
  }, []);

  return <div>{value}</div>;
};

// for (let i = 0; i < toairports.length; i++) {
//   const myFirstPokemon = alldata.find(({ id }) => id === toairports[i]);
//   console.log(myFirstPokemon); // { id: 0, name: 'Pikachu' }
// }

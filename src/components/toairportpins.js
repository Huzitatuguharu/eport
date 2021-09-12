import * as React from 'react';
import { IconContext } from 'react-icons';

import { BsFlagFill } from 'react-icons/bs';
import { Marker } from 'react-map-gl';
import { supabase } from '../lib/createSupabaseClient';

export const ToAirportPins = (props) => {
  const { data, onClick } = props;
  console.log('aaa', data);
  if (data) {
    return data.map((city, index) => (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <IconContext.Provider value={{ color: '#73a9ff', size: '24px' }}>
          <BsFlagFill onClick={() => onClick(city)}></BsFlagFill>
          <style jsx>{``}</style>
        </IconContext.Provider>
      </Marker>
    ));
  }
  // return (
  //   <Marker longitude={135} latitude={35}>
  //     {/* <Marker longitude={135} latitude={35}> */}
  //     <IconContext.Provider value={{ color: '#333', size: '24px' }}>
  //       <RiMapPin3Fill></RiMapPin3Fill>
  //     </IconContext.Provider>
  //     <style jsx>{``}</style>
  //   </Marker>
  // );
};

export default React.memo(ToAirportPins);

// async function doAsync() {
//   return '値';
// }
// // doAsync関数はPromiseを返す
// doAsync().then((value) => {
//   console.log(value); // => "値"
// });

// const Randomizer = () => {
//   const [value, setValue] = useState(123);

//   // 描画前に同期的に実行される
//   useLayoutEffect(() => {
//     setValue(Math.random());
//   }, []);

//   return <div>{value}</div>;
// };

// for (let i = 0; i < toairports.length; i++) {
//   const myFirstPokemon = alldata.find(({ id }) => id === toairports[i]);
//   console.log(myFirstPokemon); // { id: 0, name: 'Pikachu' }
// }

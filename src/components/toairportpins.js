import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';

export const Toairportpin = (props) => {
  const { data } = props;
  console.log('aaa', data);
  console.log('aaa', data[0]);
  console.log('aaa', data[0].longitude);

  return data.map((city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
      <IconContext.Provider value={{ color: '#333', size: '24px' }}>
        <RiMapPin3Fill></RiMapPin3Fill>
        <style jsx>{``}</style>
      </IconContext.Provider>
    </Marker>
  ));

  return (
    <Marker longitude={data[0].longitude} latitude={data[0].latitude}>
      {/* <Marker longitude={135} latitude={35}> */}
      <IconContext.Provider value={{ color: '#333', size: '24px' }}>
        <RiMapPin3Fill></RiMapPin3Fill>
      </IconContext.Provider>
      <style jsx>{``}</style>
    </Marker>
  );
};

export default React.memo(Toairportpin);

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

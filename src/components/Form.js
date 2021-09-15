import * as React from 'react';

import { useContactForm } from '../hooks/useGetContactForm';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export const FormContent = () => {
  const { data, isLoading, isError } = useContactForm();
  console.log(data);

  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;

  // return data?.map((city, index) => (
  //   <>
  //     <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
  //       <IconContext.Provider value={{ color: '#65666e', size: '8px' }}>
  //         {/* <RiMapPin3Line onClick={onclickpin}></RiMapPin3Line> */}
  //         <RiMapPin3Fill onClick={() => onClick(city)}></RiMapPin3Fill>
  //       </IconContext.Provider>
  //     </Marker>
  //   </>
  // ));
};

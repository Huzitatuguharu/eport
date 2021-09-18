import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';

import { useAirport } from '../hooks/useConnectSupabase';


export const ToAirportPins = (props) => {
  const { airportData } = useAirport();
  const { routeData, onClick } = props;
  let toAirportsData=[];

  console.log('routeData', routeData);

  for (let i = 0; i < routeData.length; i++) {
    toAirportsData.push(airportData.find(({ id }) => id === routeData[i].to));
  }

  if (toAirportsData) {
    return toAirportsData.map((city, index) => (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <IconContext.Provider value={{ color: '#819DF1', size: '24px' }}>
          <RiMapPin3Fill onClick={() => onClick(city)}></RiMapPin3Fill>
          <style jsx>{``}</style>
        </IconContext.Provider>
      </Marker>
    ));
  }
};

export default React.memo(ToAirportPins);

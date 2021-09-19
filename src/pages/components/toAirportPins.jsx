import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';

import { useAirport } from '../hooks/useConnectSupabase';

export const ToAirportPins = (props) => {
  const { airportData } = useAirport();
  const { toAirports, onClick } = props;
  console.log(toAirports);

  let toAirportsData = [];
  if (toAirports) {
    for (let i = 0; i < toAirports.length; i++) {
      toAirportsData[i] = {
        ...toAirports[i],
        ...airportData.find(({ id }) => id === toAirports[i].to),
      };
    }
    console.log('toAirportsData', toAirportsData);
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

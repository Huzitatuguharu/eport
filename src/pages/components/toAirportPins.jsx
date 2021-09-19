import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';


export const ToAirportPins = (props) => {
  const { toAirports, onClick } = props;

  if (toAirports) {
    return toAirports.map((city, index) => (
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

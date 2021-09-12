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
};

export default React.memo(ToAirportPins);

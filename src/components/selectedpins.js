import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function SelectedPins(props) {
  const { data } = props;

  return (
    <Marker longitude={data.longitude} latitude={data.latitude}>
      <IconContext.Provider value={{ color: '#41A5D6', size: '8px' }}>
        <RiMapPin3Fill></RiMapPin3Fill>
      </IconContext.Provider>

      <style jsx>{``}</style>
    </Marker>
  );
}

export default React.memo(SelectedPins);

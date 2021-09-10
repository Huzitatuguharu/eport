import * as React from 'react';
import { IconContext } from 'react-icons';
import { RiMapPin3Line } from 'react-icons/ri';
import { Marker } from 'react-map-gl';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const { data, onClick } = props;

  return data.map((city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
      <IconContext.Provider value={{ color: '#333', size: '8px' }}>
        {/* <RiMapPin3Line onClick={onclickpin}></RiMapPin3Line> */}

        <RiMapPin3Line onClick={() => onClick(city)}></RiMapPin3Line>
        <style jsx>{``}</style>
      </IconContext.Provider>
    </Marker>
  ));
}

export default React.memo(Pins);

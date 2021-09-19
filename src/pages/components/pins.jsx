import * as React from 'react';
import { IconContext } from 'react-icons';
import { RiMapPin3Fill, RiMapPin3Line } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { Loading } from '../components/Loading';
import { useAirport } from '../hooks/useConnectSupabase';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const { airportData, isLoading } = useAirport();
  const { onClick } = props;

  if (isLoading) return <Loading />;
  if (airportData) {
    return airportData?.map((city, index) => (
      <Marker
        key={`marker-${index}`}
        value={city.airportid}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <IconContext.Provider value={{ color: '#65666e', size: '8px' }}>
          {/* <RiMapPin3Line onClick={onclickpin}></RiMapPin3Line> */}
          <RiMapPin3Fill onClick={() => onClick(city)}></RiMapPin3Fill>
        </IconContext.Provider>
      </Marker>
    ));
  }
}

export default React.memo(Pins);

import * as React from 'react';
import { IconContext } from 'react-icons';
import { RiMapPin3Fill, RiMapPin3Line } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { useAirport } from '../hooks/useConnectSupabase';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 12;
// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const { airportData, isLoading } = useAirport();
  const { onClick } = props;

  if (isLoading) return <p>ロード中</p>;
  if (airportData) {
    return airportData?.map((city, index) => (
      <Marker
        key={`marker-${index}`}
        value={city.airportid}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <svg
          height={SIZE}
          viewBox='0 0 24 24'
          style={{
            cursor: 'pointer',
            fill: '#65666e',
            stroke: 'none',
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          }}
          onClick={() => onClick(city)}
        >
          <path d={ICON} />
        </svg>
        {/* <RiMapPin3Line onClick={onclickpin}></RiMapPin3Line>
        <RiMapPin3Fill
          style={{
            cursor: 'pointer',
            fill: '#65666e',
            width: '16px',
          }}
          className='marker'
          onClick={() => onClick(city)}
        ></RiMapPin3Fill> */}
      </Marker>
    ));
  }
}

export default React.memo(Pins);

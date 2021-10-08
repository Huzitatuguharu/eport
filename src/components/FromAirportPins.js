import Image from 'next/image';
import * as React from 'react';
import { Marker } from 'react-map-gl';

const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';

const pin_size_normal = 24;

const icon_width = 30;
const icon_height = 30;

export const FromAirportPins = (props) => {
  const { clickAirport } = props;
  console.log(clickAirport.longitude);
  console.log('FromAirportPins', clickAirport);

  return (
    <>
      <Marker longitude={clickAirport.airportlongitude} latitude={clickAirport.airportlatitude}>
        {/* <Marker longitude={135} latitude={38}> */}
        <p className='icon_from'>
          <Image
            src='/vector.svg'
            alt='Picture of the author'
            width={icon_width}
            height={icon_height}
            size='fixed'
          />
        </p>
        {/* <svg
        height={pin_size_normal}
        viewBox='0 0 24 24'
        style={{
          cursor: 'pointer',
          fill: '#4B5563',
          transform: `translate(${-pin_size_normal / 2}px,${-pin_size_normal}px)`,
        }}
      >
        <path d={ICON} />
      </svg> */}
      </Marker>
      <style jsx>{`
        .icon_from {
          position: relative;
          top: -15px;
          left: -15px;
        }
      `}</style>
    </>
  );
};

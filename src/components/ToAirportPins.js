import Image from 'next/image';

import * as React from 'react';
import { Marker } from 'react-map-gl';

// アイコン
const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';
const ICON2 =
  'M130.667 65.3333C130.667 101.414 65.3333 266 65.3333 266C65.3333 266 0 101.414 0 65.3333C0 48.0059 6.88332 31.3881 19.1357 19.1357C31.3881 6.88331 48.0059 0 65.3333 0C82.6608 0 99.2786 6.88331 111.531 19.1357C123.783 31.3881 130.667 48.0059 130.667 65.3333Z';
const pin_size_big = 20;

export const ToAirportPins = (props) => {
  const { toAirports, onClick, selectedToAirport } = props;

  console.log(selectedToAirport);
  if (toAirports) {
    return toAirports.map((city, index) => (
      <Marker
        longitude={city.airportlongitude}
        latitude={city.airportlatitude}
        key={`toAirport-${index}`}
      >
        <svg
          className='icon_to'
          height={pin_size_big}
          viewBox='0 0 30 30'
          style={{
            cursor: 'pointer',
            transform: `translate(${-pin_size_big / 2}px,${-pin_size_big + 7}px)`,
          }}
          onClick={() => onClick(city)}
        >
          <path d={ICON} />
        </svg>
        <style jsx>{`
          .icon_to {
            fill: #615f72;
            transition: all 2.5s;
          }
          .icon_to:hover {
            fill: #ed819c;
            transform: translateY(-0.1875em);
          }
        `}</style>
      </Marker>
    ));
  }
};

React.memo(ToAirportPins);

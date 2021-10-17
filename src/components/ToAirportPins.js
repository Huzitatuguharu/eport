import * as React from 'react';
import { useState } from 'react';
import { Marker } from 'react-map-gl';
// アイコン
const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';
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
          className='normalPin'
          id={city.airportid}
          height={pin_size_big}
          viewBox='0 0 30 30'
          style={{
            cursor: 'pointer',
            transform: `translate(${-pin_size_big / 2}px,${-pin_size_big + 4}px)`,
          }}
          onClick={() => {
            onClick(city);
          }}
        >
          <path d={ICON} />
        </svg>
        <style jsx>{`
          .normalPin {
            fill: #615f72;
            background-color: ${(props) => (props.count > 1000 ? 'red' : 'blue')};
          }
          .normalPin:hover {
            fill: #31b1ff;
          }
        `}</style>
      </Marker>
    ));
  }
};

React.memo(ToAirportPins);

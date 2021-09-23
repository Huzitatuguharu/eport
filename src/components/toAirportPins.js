import * as React from 'react';
import { Marker } from 'react-map-gl';

const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';

const pin_size_big = 18;

export const ToAirportPins = (props) => {
  const { toAirports, onClick } = props;

  if (toAirports) {
    return toAirports.map((city, index) => (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <svg
          height={pin_size_big}
          viewBox='0 0 24 24'
          style={{
            cursor: 'pointer',
            fill: '#3B82F6',
            transform: `translate(${-pin_size_big / 2}px,${-pin_size_big + 7}px)`,
          }}
          onClick={() => onClick(city)}
        >
          <path d={ICON} />
        </svg>
      </Marker>
    ));
  }
};
 React.memo(ToAirportPins);

import * as React from 'react';
import { Marker } from 'react-map-gl';

const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';

export const FromAirportPin = (props) => {
  const { clickAirport } = props;
  return (
    <>
      <Marker longitude={clickAirport.airportlongitude} latitude={clickAirport.airportlatitude}>
        {/* <Marker longitude={135} latitude={38}> */}
          <svg
            className='icon_from'
            width='30'
            height='20'
            viewBox='0 0 638 396'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M531.503 9.71826C516.82 6.77313 500.785 15.842 465.7 43.6304L403.05 93.2509C402.221 93.9078 401.165 94.2093 400.114 94.0895L195.712 70.7896C189.746 69.7347 182.3 70.8888 179.187 73.3547L136.397 107.542C133.265 110.047 136.075 114.343 142.63 117.08L288.554 176.318C291.394 177.471 291.936 181.257 289.533 183.16L194.391 258.516C193.408 259.295 192.116 259.567 190.902 259.252L71.608 228.248C67.0581 226.862 60.7827 227.731 57.6702 230.196L25.0747 256.013C21.9318 258.502 22.8323 263.125 27.099 266.341L100.753 326.483C102.732 328.099 102.709 331.131 100.706 332.717L85.5281 344.739C69.5785 357.372 88.1099 386.394 110.828 386.583C133.557 386.787 298.14 340.199 315.646 326.334L539.542 149.001C587.39 111.103 616.863 51.3224 596.758 23.5714C586.704 9.69607 546.176 12.6473 531.503 9.71826Z'
              fill='url(#paint0_linear)'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='15.2175'
                y1='261.156'
                x2='638.571'
                y2='116.813'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#0052D4' />
                <stop offset='0.5' stopColor='#4364F7' />
                <stop offset='1' stopColor='#6FB1FC' />
              </linearGradient>
            </defs>
          </svg>
      </Marker>
      <style jsx>{`
        .icon_from {
          position: relative;
          top: -20px;
          left: -20px;
        }
      `}</style>
    </>
  );
};
React.memo(FromAirportPin);

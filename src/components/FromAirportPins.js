import Image from 'next/image';
import * as React from 'react';
import { Marker } from 'react-map-gl';

const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';

const pin_size_normal = 24;

const icon_width = 50;
const icon_height = 50;

export const FromAirportPins = (props) => {
  const { clickAirport } = props;
  console.log(clickAirport.longitude);
  console.log('FromAirportPins', clickAirport);

  return (
    <>
      <Marker longitude={clickAirport.airportlongitude} latitude={clickAirport.airportlatitude}>
        {/* <Marker longitude={135} latitude={38}> */}
        <p className='icon_from'>
          <svg
            width='40'
            height='30'
            viewBox='0 0 376 280'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M368.577 22.1413C372.159 25.9116 374.51 30.6816 375.319 35.8187C376.119 40.979 375.324 46.2604 373.042 50.9571C370.759 55.6537 367.098 59.5419 362.547 62.102C344.715 72.239 321.851 85.0213 296.793 99.0308C286.103 105.007 275.015 111.206 263.747 117.519L240.63 243.13C239.988 246.494 238.287 249.564 235.775 251.891L210.547 274.902C207.667 277.572 203.917 279.11 199.991 279.23C198.041 279.25 196.105 278.891 194.291 278.174C191.77 277.16 189.589 275.451 188 273.246C186.412 271.042 185.482 268.431 185.319 265.719L175.502 166.285C70.6857 223.391 66.4634 224.869 60.1301 217.163L7.35234 175.68C4.13277 173.099 1.80836 169.569 0.709243 165.591C-0.389871 161.614 -0.207802 157.391 1.22959 153.523C2.66698 149.655 5.28661 146.338 8.71641 144.043C12.1462 141.749 16.2118 140.593 20.3357 140.741L71.6357 142.852L125.175 103.847L94.1081 96.6637C91.5265 95.9918 89.2015 94.5707 87.4263 92.5796C85.651 90.5885 84.5049 88.1164 84.1324 85.4749C83.7599 82.8334 84.1776 80.1408 85.333 77.7364C86.4884 75.3319 88.3297 73.3233 90.6248 71.9637L118.386 55.8137C120.619 54.5035 123.189 53.8794 125.775 54.0193L193.569 54.0196L254.775 9.4298C260.225 5.36277 266.486 2.5136 273.133 1.07496C279.779 -0.363679 286.658 -0.35824 293.302 1.09092L355.263 14.7076C360.352 15.7786 364.996 18.3711 368.577 22.1413Z'
              fill='#FE4A69'
            />
          </svg>
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

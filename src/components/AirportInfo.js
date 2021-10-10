import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import useMedia from 'use-media';
import AirplaneIcon from './Styling';

function AirportInfo(props) {
  const { airport, direction } = props;
  const isWide = useMedia({ minWidth: '1200px' });

  const AirportSubInfo = () => {
    // Accepts an object of features to test
    // Or a regular media query string
    return (
      <div className='airportInfo_right_under'>
        {/* <span className='airportIcao'> {airport.airporticao} </span> */}
        <span className='airportIata'> {airport.airportiata} </span>
        {airport.lounge == 1 && (
          <p className='airportLounge'>{/* <FaCoffee size={16} color={'#414b5a'} /> */}</p>
        )}
        <style jsx>{`
          .airportInfo_right_under {
            font-family: 'Varela Round', sans-serif;
            font-weight: 400;
            display: flex;
            gap: 1em;
            font-size: 0.9em;
            color: #606f86;
          }
        `}</style>
      </div>
    );
  };

  if (airport) {
    return (
      <div className='airportCard'>
        <AirplaneIcon direction={direction} />
        <div className='airportDetail'>
          <a
            className='airportLink airportName'
            href={airport.airporturl}
            rel='noopener noreferrer'
            target='_blank'
          >
            {airport.airportname}
          </a>
          {isWide && <AirportSubInfo />}
        </div>

        <style jsx>{`
          .airportCard {
            width: 45%;
            border-radius: 12px;
            background: #edfafd;
            box-shadow: 8px 8px 13px #d1dcdf, -8px -8px 13px #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 14px;
            gap: 8px;
          }
          .airportName {
            font-size: 1.1em;
            font-family: 'mamelon';
            color: #414b5a;
            font-weight: 500;
            margin-right: 20px;
          }
          .airportLink {
            position: relative;
          }
          .airportLink:after {
            font-family: 'Material Icons';
            content: '\e89e';
            position: absolute;
            right: -20px;
          }
        `}</style>
      </div>
    );
  }
}

export default React.memo(AirportInfo);

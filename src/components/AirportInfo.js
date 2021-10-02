import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
// アイコン
import { IconContext } from 'react-icons';
import { FaPlaneArrival, FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import useMedia from 'use-media';
import theme from '../../styles/theme';
import AirplaneIcon from './Styling';

// Alternatively, you can import as:
// import {useMedia} from 'use-media';

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
          <p className='airportLounge'>
            <FaCoffee size={16} color={'#414b5a'} />
          </p>
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
        <div className='airportCard_right'>
          <div className='airportCard_right_top'>
            <p className='airportName'>{airport.airportname}</p>
            <a
              className='link_icon'
              href={airport.airporturl}
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={12} color={'#414b5a'} />
            </a>
          </div>
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
            padding: 14px;
            gap: 0 8px;
            flex-direction: column;
          }
          .airportCard_right {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .airportCard_right_top {
            gap: 8px;
            display: flex;
          }
          .airportName {
            font-size: 1.1em;
            font-family: ${theme.fontFamily.japan};
            color: #414b5a;
            font-weight: 500;
            font-style: normal;
          }
          .airportInfo_right_under {
            font-family: ${theme.fontFamily.english};
            font-weight: 500;
            display: flex;
            gap: 1em;
            font-size: 0.9em;
            color: #606f86;
          }
        `}</style>
      </div>
    );
  }
}

export default React.memo(AirportInfo);

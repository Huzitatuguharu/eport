import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
// アイコン
import { IconContext } from 'react-icons';
import { FaPlaneArrival, FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import useMedia from 'use-media';
import  AirplaneIcon  from './Styling';

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
        <span className='airportIcao'> {airport.airporticao} </span>
        <span className='airportIata'> {airport.airportiata} </span>
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
        <div className='airportCard_left'>
          <AirplaneIcon direction={direction} />
        </div>
        <div className='airportCard_right'>
          <div className='airportCard_right_top'>
            <p className='airportName'>{airport.airportname}</p>
            <a href={airport.airporturl} rel='noopener noreferrer' target='_blank'>
              <p className='link_icon'>
                <FaExternalLinkAlt size={12} color={'#414b5a'} />
              </p>
            </a>
            {airport.lounge == 1 && (
              <p className='airportLounge'>
                <FaCoffee size={16} color={'#414b5a'} />
              </p>
            )}
          </div>
          {isWide && <AirportSubInfo />}
        </div>

        <style jsx>{`
          .airportCard {
            padding: 20px;
            width: 260px;
            border-radius: 20px;
            box-shadow: 8px 8px 13px #d1dcdf, -8px -8px 13px #ffffff;
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .airportCard_right {
            display: flex;
            flex-direction: column;
          }
          .airportCard_right_top {
            display: flex;
            gap: 1em;
          }
          .airportInfo_right_under {
            font-family: 'Rubik', sans-serif;
            font-weight: 500;
            display: flex;
            gap: 1em;
            font-size: 0.9em;
            color: #606f86;
          }

          .airportName {
            color: #414b5a;
            font-family: mamelon, sans-serif;
            font-weight: 500;
            font-style: normal;
            display: flex;
            gap: 16px;
          }
          .title_icon {
            border: none;
            background: #edfafd;
            border-radius: 99999px;
            width: 40px;
            height: 40px;
            box-shadow: 5px 5px 10px #bccdd1, -5px -5px 10px #ffffff;
            &:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default React.memo(AirportInfo);

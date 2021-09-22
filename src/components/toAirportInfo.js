import Link from 'next/link';
import * as React from 'react';

// アイコン
import { FaPlaneArrival, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';

function ToAirportInfo(props) {
  const { selectedToAirports} = props;

  if (selectedToAirports) {
    return (
      <div className='airportCard'>
        <div className='title'>
          <FaPlaneArrival size={24} color={'#414b5a'} />
        </div>
        <div>
          <Link href={selectedToAirports.airporturl}>
            <a className='airportName' rel='noopener noreferrer' target='_blank'>
              {selectedToAirports.airportname}
              <p>
                <FaExternalLinkAlt size={12} color={'#414b5a'} />
              </p>
            </a>
          </Link>
        </div>
        <div className='airportInfo'>
          <p className='airportIcao'>{selectedToAirports.airporticao} </p>
          <p className='airportIata'>{selectedToAirports.airportiata} </p>
          {selectedToAirports.lounge == 1 && (
            <p className='airportLounge'>
              <FaCoffee size={18} color={'#606f86'} />
            </p>
          )}
        </div>

        <style jsx>{`
          .airportCard {
            outline: none;
            border: none;
            padding: 30px;
            border-radius: 20px;
            background: #edfafd;
            box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
            display: grid;
            gap: 0.15em;
            width: 180px;
            height: 170px;
            transform: translateX(20px) translateY(10px) rotate(10deg);
          }
          .airportInfo {
            display: flex;
            gap: 20px;
          }
          .airportName {
            font-size: 1.3em;
            color: #414b5a;
            font-family: mamelon, sans-serif;
            font-weight: 500;
            font-style: normal;
            display: flex;
            gap: 16px;
          }
          .airportIcao {
            color: #606f86;
            font-family: 'Ubuntu', sans-serif;
          }
          .airportIata {
            color: #606f86;
            font-family: 'Ubuntu', sans-serif;
          }
          .airportLounge {
            color: #606f86;
          }
          .icon {
            margin-right: 8px;
          }
        `}</style>
      </div>
    );
  }
}

export default React.memo(ToAirportInfo);

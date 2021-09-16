import Link from 'next/link';
import * as React from 'react';

// アイコン
import { FaPlaneArrival, FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';

function AirportInfo(props) {
  const { info, direction } = props;
  console.log(direction);

  return (
    <div className='airportCard '>
      <div className='title'>
        {direction == 'from' ? (
          <FaPlaneDeparture size={24} color={'#414b5a'} />
        ) : (
          <FaPlaneArrival size={24} color={'#414b5a'} />
        )}
        <span className='title_text'></span>
      </div>
      <div>
        <Link href={info.url}>
          <a className='airportName' rel='noopener noreferrer' target='_blank'>
            <div> {info.name} </div>
            <p>
              <FaExternalLinkAlt size={12} color={'#414b5a'} />
            </p>
          </a>
        </Link>
      </div>
      <div className='airportInfo'>
        <p className='airportIcao'> {info.icao} </p>
        <p className='airportIata'> {info.iata} </p>
        {info.lounge == 1 && (
          <p className='airportLounge'>
            <FaCoffee size={18} color={'#606f86'} />
          </p>
        )}
      </div>

      {/* gap1つ目が行間、2つ目が列間 */}
      <style jsx>{`
        .airportCard {
          outline: none;
          border: none;
          padding: 30px;
          background: #edfafd;
          box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
          border-radius: 20px;
          display: grid;
          gap: 0.15em;
          width: 300px;
          height: 180px;
        }
        .airportInfo {
          display: flex;
          gap: 20px;
        }
        .airportName {
          font-size: 1.3em;
          font-display: fallback;
          color: #414b5a;
          font-family: mamelon, sans-serif;
          font-weight: 500;
          font-style: normal;
          display: flex;
          gap: 16px;
          &::first-letter {
            font-size: 1.5em;
            color: #4fa7ff;
          }
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

export default React.memo(AirportInfo);

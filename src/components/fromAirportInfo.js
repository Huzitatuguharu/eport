import Link from 'next/link';
import * as React from 'react';

// アイコン
import { FaPlaneDeparture, FaCoffee } from 'react-icons/fa';

function FromAirportInfo(props) {
  const { info } = props;

  return (
    <div className='airportCard '>
      <div className='title'>
        <FaPlaneDeparture size={24} color={'#414b5a'} />
        <span className='title_text'></span>
      </div>
      <p className='airportName fadeInAnime'>
        <Link href={info.url}>
          <a rel='noopener noreferrer' target='_blank'>
            {info.name}
          </a>
        </Link>
      </p>
      <div className='airportInfo'>
        <p className='airportIcao'> {info.icao} </p>
        <p className='airportIata'> {info.iata} </p>
        {info.lounge == 1 && (
          <p className='airportLounge'>
            <FaCoffee size={24} color={'#414b5a'} />
          </p>
        )}
      </div>

      {/* gap1つ目が行間、2つ目が列間 */}
      <style jsx>{`
        p {
          color: #414b5a;
          font-family: mamelon, sans-serif;
          font-weight: 500;
          font-style: normal;
        }
        .airportCard {
          outline: none;
          border: none;
          padding: 30px;
          border-radius: 50px;
          background: #edfafd;
          box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
          border-radius: 20px;
          display: grid;
          gap: 0.3em;
          width: 240px;
          height: 240px;
        }
        .airportInfo {
          display: flex;
          margin: 8px 0 0;
          gap: 20px;
        }
        .airportName {
          font-size: 1.3em;
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

export default React.memo(FromAirportInfo);

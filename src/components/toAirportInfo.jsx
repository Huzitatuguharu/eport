import Link from 'next/link';
import * as React from 'react';

// アイコン
import { FaPlaneArrival, FaCoffee } from 'react-icons/fa';

function ToAirportInfo(props) {
  const { info } = props;
  console.log(info.lounge);

  return (
    <div className='airportCard'>
      <div className='title'>
        <FaPlaneArrival size={24} color={'#414b5a'} />
        <span className='title_text'></span>
      </div>
      <p className='airportName'>
        <Link href={info.url}>
          <a rel='noopener noreferrer' target='_blank'>
            {info.name}
          </a>
        </Link>
      </p>
      <div className='airportInfo'>
        <p className='airportIcao'>{info.icao} </p>
        <p className='airportIata'>{info.iata} </p>
        {info.lounge == 1 && (
          <p className='airportLounge'>
            <FaCoffee size={24} color={'#414b5a'} />
          </p>
        )}
      </div>

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
          border-radius: 20px;
          background: #edfafd;
          box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
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

export default React.memo(ToAirportInfo);

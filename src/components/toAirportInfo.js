import Link from 'next/link';
import * as React from 'react';

// アイコン
import { AiFillStar } from 'react-icons/ai';
import { IoIosAirplane } from 'react-icons/io';

function ToAirportInfo(props) {
  const { info } = props;
  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? 'なし🙅' : 'あり🙆';

  return (
    <div className='airportCard'>
      <p>
        <div className='title'>
          <AiFillStar size={24} color={'#333'} />
          <span className='title_text'>到着</span>
        </div>
        <p className='airportName'>
          <Link href={info.url}>
            <a rel='noopener noreferrer' target='_blank'>
              {info.name}
            </a>
          </Link>
        </p>
        <div className='airportInfo'>
          <p className='airportIcao'>ICAO : {info.icao} </p>
          <p className='airportIata'>IATA : {info.iata} </p>
          {/* <AiFillStar className='icon' /> */}
          <p className='airportLounge'> ラウンジ : {AirportLoungeMark} </p>
        </div>
      </p>

      <style jsx>{`
        p {
          color: #414b5a;
          font-family: mamelon, sans-serif;
          font-weight: 500;
        }
        .airportCard {
          outline: none;
          border: none;
          margin: 30px;
          padding: 30px;
          background: #cee7ed;
          box-shadow: 20px 20px 60px #afc4c9, -20px -20px 60px #edffff;
          border-radius: 20px;
        }
        .airportInfo {
          display: flex;
        }
        .airportName {
          font-size: 1.2em;
          margin: 8px 0 0;
        }
        .airportIcao {
          margin: 8px 8px 8px 0;
          color: #606f86;
        }
        .airportIata {
          margin: 8px;
          color: #606f86;
        }
        .airportLounge {
          margin: 8px;
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

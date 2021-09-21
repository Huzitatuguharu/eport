import Link from 'next/link';
import * as React from 'react';

// アイコン
import { FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';

function FromAirportInfo(props) {
  const { clickAirport } = props;
  if (clickAirport) {
    return (
      <div className='airportCard '>
        <div className='title'>
          <FaPlaneDeparture size={24} color={'#414b5a'} />
          <span className='title_text'></span>
        </div>
        <div>
          <Link href={clickAirport.airporturl}>
            <a className='airportName' rel='noopener noreferrer' target='_blank'>
              {clickAirport.airportname}
              <p>
                <FaExternalLinkAlt size={12} color={'#414b5a'} />
              </p>
            </a>
          </Link>
        </div>
        <div className='airportInfo'>
          <p className='airportIcao'> {clickAirport.airporticao} </p>
          <p className='airportIata'> {clickAirport.airportiata} </p>
          {clickAirport.lounge == 1 && (
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
            width: 260px;
            height: 180px;
            transform: rotate(-10deg);
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

export default React.memo(FromAirportInfo);

import Link from 'next/link';
import * as React from 'react';

// アイコン
import { IconContext } from 'react-icons'; //IconContextをインポート
import { AiFillStar } from 'react-icons/ai';
import { IoIosAirplane } from 'react-icons/io';

function FromAirportInfo(props) {
  const { info } = props;
  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? 'なし🙅' : 'あり🙆';

  return (
    <div className='airportCard '>
      <div className='title'>
        <AiFillStar size={24} color={'#333'} />
        <span className='title_text'>出発</span>
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
        {/* <AiFillStar className='icon' /> */}
        <p className='airportLounge'> ラウンジ : {AirportLoungeMark} </p>
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
          margin: 30px;
          padding: 30px;
          background: #cee7ed;
          box-shadow: 20px 20px 60px #afc4c9, -20px -20px 60px #edffff;
          border-radius: 20px;
          display: grid;
          gap: 0.5em;
        }
        .airportInfo {
          display: flex;
          margin: 8px 0 0;
          gap: 20px;
        }
        .airportName {
          font-size: 1.2em;
        }
        .airportIcao {
          color: #606f86;
        }
        .airportIata {
          color: #606f86;
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

import Link from 'next/link';
import * as React from 'react';

// アイコン
import { IoAirplaneSharp } from 'react-icons/io5';

function FromAirportInfo(props) {
  const { info } = props;
  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? 'なし🙅' : 'あり🙆';

  return (
    <div className='airportCard'>
      <p>
        <p>出発</p>
        <Link href={info.url}>
          <a clsssName='airportName' rel='noopener noreferrer' target='_blank'>
            {info.name}
          </a>
        </Link>
        <p>ICAO : {info.icao} </p>
        <p>IATA : {info.iata} </p>
        {/* <AiFillStar className='icon' /> */}
        <p>ラウンジ : {AirportLoungeMark} </p>
      </p>
      <style jsx>{`
        p {
          color: #414b5a;
          font-family: vdl-v7marugothic, sans-serif;
          font-weight: 700;
        }
        .airportCard {
          outline: none;
          border: none;
          margin: 30px;
          padding: 30px;
          background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
          box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
            10px 10px 20px rgba(166, 180, 200, 0.7);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

export default React.memo(FromAirportInfo);

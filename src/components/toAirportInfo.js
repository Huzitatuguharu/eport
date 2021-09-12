import Link from 'next/link';
import * as React from 'react';

// アイコン
import { IoIosAirplane } from 'react-icons/io';

function ToAirportInfo(props) {
  const { info } = props;
  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? 'なし🙅' : 'あり🙆';

  return (
    <div className='container'>
      <p>
        <p>到着</p>
        <IoIosAirplane className='icon' />
        <Link href={info.url}>
          <a rel='noopener noreferrer' target='_blank'>
            {info.name}
          </a>
        </Link>
        <p>ICAO : {info.icao} </p>
        <p>IATA : {info.iata} </p>
        <p>ラウンジ : {AirportLoungeMark} </p>
      </p>

      <style jsx>{`
        p {
          color: #ffffff;
          font-family: vdl-v7marugothic, sans-serif;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

export default React.memo(ToAirportInfo);

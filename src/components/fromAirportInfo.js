import Link from 'next/link';
import * as React from 'react';

// アイコン
import { IoAirplaneSharp } from 'react-icons/io5';

function FromAirportInfo(props) {
  const { info } = props;
  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? 'なし🙅' : 'あり🙆';

  return (
    <div className='container'>
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
          color: #ffffff;
          font-family: vdl-v7marugothic, sans-serif;
          font-weight: 700;
        }
        .airportName{


        }
        }
      `}</style>
    </div>
  );
}

export default React.memo(FromAirportInfo);

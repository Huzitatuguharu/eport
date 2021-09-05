import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { supabase } from '../lib/Supabase';

function CityInfo(props) {
  const { info } = props;
  const Airportid = `${info.id}`;

  const AirportName = `${info.name}`;
  const AirportICAO = `${info.icao}`;
  const AirportIATA = `${info.iata}`;
  const AirportURL = `${info.url}`;
  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? '×' : '〇';
  console.log(AirportURL);



  return (
    <div className='container'>
      <div>
        <p>空港👀　{AirportName} </p>
        <p>ICAO🐈　{AirportICAO} </p>
        <p>IATA🐕　{AirportIATA} </p>
        <p>URL🐋</p>
        {/* <Link href='https://code-kitchen.dev/html/a/'>
          <a>Webサイト</a>
        </Link> */}
        <p>ラウンジ🐬　{AirportLoungeMark} </p>

        {/* <button onClick={()=>getroutedata()}>決定</button> */}
      </div>

      <style jsx>{`
        div {
          margin: 40px;
        }
        p {
          color: #0080c0;
        }
      `}</style>
    </div>
  );
}

export default React.memo(CityInfo);

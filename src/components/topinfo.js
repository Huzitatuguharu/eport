import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';

// アイコン
import { AiOutlineEnvironment } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IoIosAirplane } from 'react-icons/io';
import { supabase } from '../lib/createSupabaseClient';


function TopInfo(props) {
  const { info } = props;

  const AirportLounge = info.lounge;
  const AirportLoungeMark = AirportLounge == 0 ? 'なし🙅' : 'あり🙆';
  console.log(AirportLoungeMark);

  return (
    <div className='container'>
      <p>
        {/* <AiOutlineEnvironment className='icon' /> */}
        <IoIosAirplane className='icon' />
        <Link href={info.url}>
          <a rel='noopener noreferrer' target='_blank'>
            {info.name}
          </a>
        </Link>
        <IoIosAirplane className='icon' />
        {/* <AiFillStar className='icon' /> */}
        {info.icao}
        <IoIosAirplane className='icon' />
        {/* <AiFillStar className='icon' /> */}
        {info.iata}
        <IoIosAirplane className='icon' />
        {/* <AiFillStar className='icon' /> */}
        ラウンジ　
        {AirportLoungeMark}
      </p>

      <style jsx>{`
        p {
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default React.memo(TopInfo);

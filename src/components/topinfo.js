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
  const AirportLoungeMark = AirportLounge == 0 ? '×' : '〇';

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
        <AiFillStar className='icon' />
        {info.icao}
        <AiFillStar className='icon' />
        {info.iata}
      </p>
      <style jsx>{`
        p {
          color: #0080c0;
        }
      `}</style>
    </div>
  );
}

export default React.memo(TopInfo);

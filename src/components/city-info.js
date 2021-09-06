import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { supabase } from '../lib/createSupabaseClient';

function CityInfo(props) {
  const { info } = props;
  const AirportName = `${info.name}`;
  return (
    <div className='container'>
      <p>{AirportName} </p>
      <style jsx>{`
        
        p {
          color: #0080c0;
        }
      `}</style>
    </div>
  );
}

export default React.memo(CityInfo);

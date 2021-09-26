import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
// アイコン
import { IconContext } from 'react-icons';

import { FaPlaneArrival, FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import useMedia from 'use-media';

// Alternatively, you can import as:
// import {useMedia} from 'use-media';

const AirplaneIcon = (props) => {
  const { direction } = props;
  const isWide = useMedia({ minWidth: '1200px' });

  let icon;
  if (direction == 'from') {
    icon = (
      <p className='icon_parent'>
        <Image src='/Vector.svg' alt='Picture of the author' width={30} height={30} />
        <style jsx>{`
          .icon_parent {
            transform: rotate(-23deg);
          }
        `}</style>
      </p>
    );
  } else {
    icon = (
      <p className='icon_parent'>
        <Image src='/Vector.svg' alt='Picture of the author' width={30} height={30} />
        <style jsx>{`
          .icon_parent {
            transform: rotate(23deg);
          }
        `}</style>
      </p>
    );
  }

  return <div className='airportCard_left'>{icon}</div>;
};

export default React.memo(AirplaneIcon);

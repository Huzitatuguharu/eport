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
      <button className='title_icon'>
        <Image
          src='/Vector.svg'
          alt='Picture of the author'
          width={36}
          height={36}
        />
        <style jsx>{`
          .title_icon {
            transform: rotate(-25deg);
            border: none;
            background: #edfafd;
            border-radius: 99999px;
            width: 40px;
            height: 40px;
            box-shadow: 5px 5px 10px #bccdd1, -5px -5px 10px #ffffff;
            &:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
            }
          }
        `}</style>
      </button>
    );
  } else {
    icon = (
     <button className='title_icon'>
        <Image
          src='/Vector.svg'
          alt='Picture of the author'
          width={36}
          height={36}
        />
        <style jsx>{`
          .title_icon {
            transform: rotate(23deg);
            border: none;
            background: #edfafd;
            border-radius: 99999px;
            width: 40px;
            height: 40px;
            box-shadow: 5px 5px 10px #bccdd1, -5px -5px 10px #ffffff;
            &:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
            }
          }
        `}</style>
      </button>)
  }

  return (
    <div className='airportCard_left'>
    {icon}
    </div>
  );
};

export default React.memo(AirplaneIcon);

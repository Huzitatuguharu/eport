import Link from 'next/link';
import * as React from 'react';

// アイコン//IconContextをインポート
import { IconContext } from 'react-icons';
import { FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';

function FromAirportInfo(props) {
  const { clickAirport } = props;
  if (clickAirport) {
    return (
      <div className='airportCard '>
        <div className='title'>
          <FaPlaneDeparture size={20} color={'#414b5a'} />
        </div>
        <div>
          <Link href={clickAirport.airporturl}>
            <a className='airportName' rel='noopener noreferrer' target='_blank'>
              {clickAirport.airportname}
              <div className='title_icon'>
                <p className='link_icon'>
                  <FaExternalLinkAlt size={12} color={'#414b5a'} />
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className='airportInfo'>
          <span className='airportIcao'> {clickAirport.airporticao} </span>
          <span className='airportIata'> {clickAirport.airportiata} </span>
          {clickAirport.lounge == 1 && (
            <p className='airportLounge'>
              <FaCoffee size={16} color={'#606f86'} />
            </p>
          )}
        </div>

        {/* gap1つ目が行間、2つ目が列間 */}
        <style jsx>{`
          .airportCard {
            outline: none;
            border: none;
            padding: 20px;
            background: #edfafd;
            box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
            border-radius: 20px;
            display: grid;
            width: 180px;
            height: 170px;
            transform: translateX(10px) translateY(20px) rotate(10deg);
          }
          .airportInfo {
            display: flex;
            gap: 8px 16px;
          }
          .airportName {
            font-size: 1.2em;
            color: #414b5a;
            font-family: mamelon, sans-serif;
            font-weight: 500;
            font-style: normal;
            display: flex;
            gap: 16px;
          }
          .airportIcao {
            font-size: 0.9em;
            color: #606f86;
            font-family: 'Ubuntu', sans-serif;
          }
          .airportIata {
            font-size: 0.9em;
            color: #606f86;
            font-family: 'Ubuntu', sans-serif;
          }
          .link_icon {
            padding: 0 0 0 9px;
          }
          .title_icon {
            width: 30px;
            height: 30px;
            border-radius: 99999px;
            background: #edfafd;
            box-shadow: 8px 8px 13px #d1dcdf, -8px -8px 13px #ffffff;
            &:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default React.memo(FromAirportInfo);

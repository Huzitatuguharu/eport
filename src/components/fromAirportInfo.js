import Link from 'next/link';
import * as React from 'react';

// アイコン//IconContextをインポート
import { IconContext } from 'react-icons';
import { FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';

function FromAirportInfo(props) {
  const { clickAirport } = props;
  if (clickAirport) {
    return (
      <div className='airportCard'>
        <div className='airportCard_left'>
          <button className='title_icon'>
            <IconContext.Provider className='icon_plane' value={{ color: '#1E40AF', size: '16px' }}>
              <FaPlaneDeparture />
            </IconContext.Provider>
          </button>
        </div>
        <div className='airportCard_right'>
          <div className='airportCard_right_top'>
            <p className='airportName'>{clickAirport.airportname}</p>
            <a href={clickAirport.airporturl} rel='noopener noreferrer' target='_blank'>
              <p className='link_icon'>
                <FaExternalLinkAlt size={12} color={'#414b5a'} />
              </p>
            </a>
            {clickAirport.lounge == 1 && (
              <p className='airportLounge'>
                <FaCoffee size={16} color={'#414b5a'} />
              </p>
            )}
          </div>

          <div className='airportInfo_right_under'>
            <span className='airportIcao'> {clickAirport.airporticao} </span>
            <span className='airportIata'> {clickAirport.airportiata} </span>
          </div>
        </div>

        {/* gap1つ目が行間、2つ目が列間 */}
        <style jsx>{`
          .airportCard {
            font-family: mamelon, sans-serif;
            padding: 20px;
            width: 250px;
            border-radius: 20px;
            box-shadow: 8px 8px 13px #d1dcdf, -8px -8px 13px #ffffff;
            display: flex;
            gap: 16px;
          }
          .airportCard_right {
            display: flex;
            flex-direction: column;
          }
          .airportCard_right_top {
            display: flex;
            gap: 1em;
          }
          .airportInfo_right_under {
            display: flex;
            gap: 1em;
            font-size: 0.9em;
            color: #606f86;
            font-family: 'Ubuntu', sans-serif;
          }

          .airportName {
            color: #414b5a;
            font-family: mamelon, sans-serif;
            font-weight: 500;
            font-style: normal;
            display: flex;
            gap: 16px;
          }
          .title_icon {
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
      </div>
    );
  }
}

export default React.memo(FromAirportInfo);

import * as React from 'react';

import { FaPlane, FaUndoAlt, FaSearch } from 'react-icons/fa';
import { useAirport, useRoute, useCompany } from '../hooks/useConnectSupabase';

// /* ==========================================================================
//   コンポーネント
//   ========================================================================== */

export const ButtonArea = (props) => {
  const { airportData } = useAirport();
  const { routeData } = useRoute();
  const { companyData } = useCompany();
  const { fromAirport, setFromAirport, setToAirports, setIsRevealPins } = props;

  //  空港テーブルから行先空港情報を取り出す

  const getToAirportData = () => {
    // 路線テーブルの検索
    let makeRouteData = routeData.filter(({ from }) => from === fromAirport.airportid);

    let toAirportsData = [];
    if (makeRouteData) {
      for (let i = 0; i < makeRouteData.length; i++) {
        toAirportsData[i] = {
          ...airportData.find(({ airportid }) => airportid === makeRouteData[i].to),
          ...makeRouteData[i],
        };
      }
      for (let j = 0; j < toAirportsData.length; j++) {
        toAirportsData[j] = {
          ...toAirportsData[j],
          ...companyData.find(({ companyid }) => companyid === toAirportsData[j].routecompany),
        };
      }
      // return toAirportsData;
      setToAirports(toAirportsData);
      setIsRevealPins(true);
    }
  };

  return (
    <div className='buttonArea'>
      <button className='Button_search tooltip' onClick={getToAirportData}>
        <span className='tooltip-text'>直行便を検索</span>
        <FaSearch size={18} color={'#414b5a'} />
      </button>
      <button className='Button_reset tooltip' onClick={() => setFromAirport(null)}>
        <span className='tooltip-text'>空港を選びなおす</span>

        <FaUndoAlt size={18} color={'#414b5a'} />
      </button>
      <style jsx>
        {`
          .buttonArea {
            display: flex;
            justify-content: start;
            flex-wrap: wrap;
            gap: 2em;
          }
          button {
            border: none;
            color: #414b5a;
            font-family: mamelon, sans-serif;
            font-weight: 500;
            font-style: normal;
            padding: 12px;
            border-radius: 20px;
            background: #edfafd;
            box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
            width: 60px;
            height: 58px;
            &:hover {
              color: #fff;
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
            }
          }
          .tooltip {
            position: relative;
            cursor: pointer;
            &:hover .tooltip-text {
              opacity: 1;
              visibility: visible;
            }
          }
          .tooltip-text {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -50px;
            display: inline-block;
            padding: 8px;
            white-space: nowrap;
            font-size: 14px;
            line-height: 1.3;
            background: #c1e1ff;
            color: #333;
            border-radius: 3px;
            transition: 0.3s ease-in;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            &:before {
              content: '';
              position: absolute;
              top: -13px;
              left: 50%;
              margin-left: -7px;
              border: 7px solid transparent;
              border-bottom: 7px solid #c1e1ff;
            }
          }
        `}
      </style>
    </div>
  );
};
export default React.memo(ButtonArea);

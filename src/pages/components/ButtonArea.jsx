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
          ...companyData.find(({ companyid }) =>companyid === toAirportsData[j].routecompany),
        };
      }
    }

    console.log('toAirportsData!!', toAirportsData);
    setToAirports(toAirportsData);

    setIsRevealPins(true);
  };

  return (
    <div className='buttonArea'>
      <button className='ButtonClickGetToAirportData' onClick={getToAirportData}>
        <FaSearch size={18} color={'#414b5a'} />
      </button>
      <button className='ButtonReset' onClick={() => setFromAirport(null)}>
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
            outline: none;
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
        `}
      </style>
    </div>
  );
};

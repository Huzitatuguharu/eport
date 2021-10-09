import * as React from 'react';
import { Marker } from 'react-map-gl';
import { useAirport, useRoute, useCompany } from '../hooks/useConnectSupabase';

import { FromAirportPins } from './FromAirportPins';
import { ToAirportPins } from './ToAirportPins';

// /* ==========================================================================
//   pinの設定
//   ========================================================================== */

const ICON2 =
  'M8.69518 68.2766L36.9667 94.7811C40.7335 98.3125 45.5387 100.535 50.6688 101.118C55.799 101.702 60.9806 100.616 65.4442 98.0204L179 31.9997L165.02 14.9137C161.394 10.4811 156.301 7.49153 150.663 6.48496C145.025 5.47839 139.213 6.52117 134.277 9.42496L101 28.9997L55.9998 13.9997L43.6256 19.303C42.6998 19.6997 41.8888 20.3231 41.2673 21.1158C40.6459 21.9084 40.234 22.8447 40.0696 23.8385C39.9052 24.8322 39.9936 25.8513 40.3266 26.8018C40.6597 27.7524 41.2266 28.6038 41.9753 29.2776L64.9998 49.9997L43.9998 61.9997L22.9998 52.9997L10.4353 58.3845C9.51902 58.7772 8.71503 59.392 8.09596 60.1734C7.4769 60.9547 7.06227 61.8781 6.88956 62.8599C6.71685 63.8417 6.79149 64.851 7.10674 65.7968C7.42199 66.7425 7.96791 67.5948 8.69518 68.2766Z';
const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';
const pin_size_normal = 15;

// /* ==========================================================================
//  ここからページ
//   ========================================================================== */

function Pins(props) {
  const { airportData, isLoading } = useAirport();
  const { routeData } = useRoute();
  const { companyData } = useCompany();
  const {
    setViewport,
    setClickAirport,
    setToAirportsData,
    clickAirport,
    toAirportsData,
    setSelectedToAirport,
    setHoverAirport,
    hoverAirport,
  } = props;

  // /* ==========================================================================
  //  pinをクリックしたときのうごき
  //   ========================================================================== */

  const getToAirportData = (city) => {
    // 選択している行先空港のpinをリセット
    setSelectedToAirport(null);

    // クリックしたピンを出発空港に設定する
    setClickAirport(city);

    // 路線テーブルからえらんだ出発空港のidと一致する路線を検索する
    let makeRouteData = routeData.filter(({ from }) => from === city.airportid);

    // toAirportsDataにすべての路線情報を格納する

    let toAirportsArray = [];
    if (makeRouteData) {
      // makeRouteDataに存在するto空港の検索

      for (let i = 0; i < makeRouteData.length; i++) {
        toAirportsArray[i] = {
          ...airportData.find(({ airportid }) => airportid === makeRouteData[i].to),
          ...makeRouteData[i],
        };
      }
      // makeRouteDataに存在する航空会社の検索

      for (let j = 0; j < toAirportsArray.length; j++) {
        toAirportsArray[j] = {
          ...toAirportsArray[j],
          ...companyData.find(({ companyid }) => companyid === toAirportsArray[j].routecompany),
        };
      }
    }

    setToAirportsData(toAirportsArray);
    console.log('12123', toAirportsData);

    // Viewportの設定の変更

    setViewport({
      latitude: city.airportlatitude - 3,
      longitude: city.airportlongitude - 2,
      zoom: 3.99,
      transitionDuration: 600,
    });
  };
  // return role === ADMIN ? <AdminUser /> : <NormalUser />;

  const simplePin = (airportData, color) => {
    // clickAirport === undefined ? (color = '#4B5563') : (color = '#9CA3AF');
    color = '#9CA3AF';
    console.log(clickAirport);
    return airportData?.map((city, index) => (
      <Marker
        key={`marker-${index}`}
        value={city.airportid}
        longitude={city.airportlongitude}
        latitude={city.airportlatitude}
      >
        <svg
          height={pin_size_normal}
          viewBox='0 0 24 24'
          style={{
            cursor: 'pointer',
            fill: color,
            transform: `translate(${-pin_size_normal / 2}px,${-pin_size_normal}px)`,
          }}
          // onClick={getToAirportData(city)}
          onClick={() => getToAirportData(city)}
          onMouseOver={() => setHoverAirport(city)}
          onMouseLeave={() => setHoverAirport()}
        >
          <circle cx='10' cy='10' r='5' />
        </svg>
      </Marker>
    ));
  };

  if (isLoading) return <p>ロード中</p>;
  return (
    <>
      {simplePin(airportData)}
      {/* FromAirportPinsが設定されたらピンの色を変える */}
      {clickAirport && <FromAirportPins clickAirport={clickAirport} />}
      {/* {clickAirport &&(  {simplePin(clickAirport)})} */}
      {toAirportsData && (
        <ToAirportPins toAirports={toAirportsData} onClick={setSelectedToAirport} />
      )}

      {/* FromAirportPinsからいける空港のピンの表示 */}
    </>
  );
}
export default React.memo(Pins);

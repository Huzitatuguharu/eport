import * as React from 'react';
import { Marker } from 'react-map-gl';
import { useAirport, useRoute, useCompany } from '../hooks/useConnectSupabase';

import { FromAirportPin } from './FromAirportPins';
import { ToAirportPins } from './ToAirportPins';

// /* ==========================================================================
//   pinの設定
//   ========================================================================== */

const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';
const pin_size_normal = 15;
const pin_size_big = 20;

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
    selectedToAirport,
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
  console.log('toAirportsData', toAirportsArray);

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
    return airportData?.map((city) => (
      <Marker
        key={city.airportid}
        value={city.airportid}
        longitude={city.airportlongitude}
        latitude={city.airportlatitude}
      >
        <svg
          key={city.airportid}
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
      {clickAirport && <FromAirportPin className='FromAirportPin' clickAirport={clickAirport} />}
      {/* {clickAirport &&(  {simplePin(clickAirport)})} */}
      {toAirportsData && (
        <ToAirportPins
          className='ToAirportPin'
          toAirports={toAirportsData}
          selectedToAirport={selectedToAirport}
          onClick={setSelectedToAirport}
        />
      )}
      {selectedToAirport && (
        <Marker
          longitude={selectedToAirport.airportlongitude}
          latitude={selectedToAirport.airportlatitude}
        >
          <svg
            className='normalPin'
            height={pin_size_big}
            viewBox='0 0 30 30'
            style={{
              cursor: 'pointer',
              transform: `translate(${-pin_size_big / 2}px,${-pin_size_big + 4}px)`,
              fill: '#ed819c',
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      )}
    </>
  );
}
export default React.memo(Pins);

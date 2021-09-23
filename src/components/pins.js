import * as React from 'react';
import { useState, useCallback } from 'react';
import { Marker } from 'react-map-gl';
import { useAirport, useRoute, useCompany } from '../hooks/useConnectSupabase';

import { FromAirportPins } from './fromAirportPins';
import { ToAirportPins } from './toAirportPins';

// /* ==========================================================================
//   pinの設定
//   ========================================================================== */

// const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
// c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
// C20.1,15.8,20.2,15.8,20.2,15.7z`;

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
    setSelectedToAirports,
    setHoverAirport,
    hoverAirport,
  } = props;

  // /* ==========================================================================
  //  pinをクリックしたときのうごき
  //   ========================================================================== */

  const getToAirportData = (city) => {
    // 選択している行先空港のpinをリセット
    setSelectedToAirports(null);

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

    // setToAirportsにすべての情報の配列を格納する

    setToAirportsData(toAirportsArray);

    // Viewportの設定の変更

    setViewport({
      latitude: city.latitude - 3,
      longitude: city.longitude - 2,
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
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <svg
          height={pin_size_normal}
          viewBox='0 0 24 24'
          style={{
            cursor: 'pointer',
            fill: color,
            // stroke: '#333',
            transform: `translate(${-pin_size_normal / 2}px,${-pin_size_normal}px)`,
          }}
          // onClick={getToAirportData(city)}
          onClick={() => getToAirportData(city)}
          onMouseOver={() => setHoverAirport(city)}
          onMouseLeave={() => setHoverAirport()}
        >
          <path d={ICON} />
        </svg>
      </Marker>
    ));
  };
  console.log(hoverAirport);

  if (isLoading) return <p>ロード中</p>;
  return (
    <>
      {simplePin(airportData)}
      {/* FromAirportPinsが設定されたらピンの色を変える */}
      {clickAirport && <FromAirportPins clickAirport={clickAirport} />}
      {/* {clickAirport &&(  {simplePin(clickAirport)})} */}

      {/* FromAirportPinsからいける空港のピンの表示 */}
      {toAirportsData && (
        <ToAirportPins toAirports={toAirportsData} onClick={setSelectedToAirports} />
      )}
    </>
  );
}
export default React.memo(Pins);

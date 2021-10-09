import Head from 'next/head';

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import ReactMapGL, { NavigationControl, Popup, GeolocateControl } from 'react-map-gl';

import AirportInfo from '../components/AirportInfo';
import { CompanyList } from '../components/CompanyList';
import { Navigation } from '../components/Navigation';
import Pins from '../components/Pins';

// /* ==========================================================================
//  mapboxの設定
//   ========================================================================== */
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px',
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px',
};

// /* ==========================================================================
//   ここからページ
//   ========================================================================== */
export default function App() {
  // 地図のviewportの設定
  const [viewport, setViewport] = useState({
    latitude: 33,
    longitude: 135,
    zoom: 5,
    transitionDuration: 5000,
    clickRadius: 1000000,
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
  });

  // クリックした空港
  const [clickAirport, setClickAirport] = useState();

  // clickAirportから行けるすべての行先空港リスト
  const [toAirportsData, setToAirportsData] = useState([]);

  // toAirportsDataの空港でクリックした行先空港
  const [selectedToAirport, setSelectedToAirport] = useState(null);
  const [hoverAirport, setHoverAirport] = useState();

  // 行先空港リストの表示、非表示、fromAirportが変わったらfalseにする
  useEffect(() => {
    setSelectedToAirport(false);
  }, [clickAirport]);

  return (
    <>
      <Head>
        <title>AirportMap</title>
        {/* ファビコン */}
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐕</text></svg>'
        ></link>
      </Head>

      <div className='container'>
        <div className='container_map'>
          <main className='map'>
            <ReactMapGL
              {...viewport}
              width='100%'
              height='100vh'
              // satellite、light 、dark 、streets 、outdoors
              mapStyle='mapbox://styles/mapbox/light-v10'
              onViewportChange={setViewport}
              cursor='pointer'
              mapboxApiAccessToken={TOKEN}
            >
              <Pins
                setViewport={setViewport}
                setClickAirport={setClickAirport}
                clickAirport={clickAirport}
                setToAirportsData={setToAirportsData}
                toAirportsData={toAirportsData}
                setSelectedToAirport={setSelectedToAirport}
                selectedToAirport={selectedToAirport}
                hoverAirport={hoverAirport}
                setHoverAirport={setHoverAirport}
              />
              {hoverAirport && (
                <Popup
                  longitude={hoverAirport.airportlongitude}
                  latitude={hoverAirport.airportlatitude}
                  closeButton={false}
                  className='hoverAirport_info'
                >
                  {hoverAirport.airportname}
                </Popup>
              )}
              <GeolocateControl style={geolocateStyle} />
              <NavigationControl style={navStyle} />
            </ReactMapGL>
          </main>
        </div>
        <div className='container_information'>
          <Navigation
            setClickAirport={setClickAirport}
            setSelectedToAirport={setSelectedToAirport}
            setToAirportsData={setToAirportsData}
          />
          {clickAirport && (
            <>
              <div className='AirportInfoArea'>
                <AirportInfo airport={clickAirport} direction={'from'} />
                {selectedToAirport && <AirportInfo airport={selectedToAirport} direction={'to'} />}
              </div>
              {selectedToAirport && (
                <CompanyList
                  selectedToAirport={selectedToAirport}
                  toAirportsData={toAirportsData}
                />
              )}
            </>
          )}
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

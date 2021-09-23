import Head from 'next/head';
import Link from 'next/link';

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import { FaPlane, FaUndoAlt, FaSearch } from 'react-icons/fa';
import ReactMapGL, { NavigationControl, Popup, ScaleControl, GeolocateControl } from 'react-map-gl';

import { CompanyList } from '../components/CompanyList';
import FromAirportInfo from '../components/fromAirportInfo';
import Pins from '../components/pins';
import ToAirportInfo from '../components/toAirportInfo';

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

const scaleControlStyle = {
  bottom: 36,
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
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
  });

  const [clickAirport, setClickAirport] = useState();

  // fromAirportから行けるすべての行先空港リスト・路線　虫眼鏡クリックしたらsetToAirports
  const [toAirportsData, setToAirportsData] = useState([]);

  // toAirportsDataの中でクリックした行先空港
  const [selectedToAirports, setSelectedToAirports] = useState(null);
  const [hoverAirport, setHoverAirport] = useState();

  // 行先空港リストの表示、非表示、fromAirportが変わったらfalseにする
  useEffect(() => {
    setSelectedToAirports(false);
  }, [clickAirport]);

  return (
    <>
      <Head>
        <title>AirportMap</title>
        {/* ファビコン */}
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>空</text></svg>'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className='container'>
        <div className='container_map'>
          <div className='map'>
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
                setSelectedToAirports={setSelectedToAirports}
                selectedToAirports={selectedToAirports}
                hoverAirport={hoverAirport}
                setHoverAirport={setHoverAirport}
              />
              {hoverAirport && (
                <Popup
                  longitude={hoverAirport.longitude}
                  latitude={hoverAirport.latitude}
                  closeButton={false}
                  className='hoverAirport_info'
                >

                  {hoverAirport.airportname}
                </Popup>
              )}
              <GeolocateControl style={geolocateStyle} />
              <NavigationControl style={navStyle} />
              <ScaleControl style={scaleControlStyle} />
            </ReactMapGL>
          </div>
        </div>
        {clickAirport && (
          <div className='container_information'>
            <div className='AirportInfoArea'>
              <FromAirportInfo clickAirport={clickAirport} />
              {selectedToAirports && <ToAirportInfo selectedToAirports={selectedToAirports} />}
            </div>
            {selectedToAirports && (
              <CompanyList
                selectedToAirports={selectedToAirports}
                toAirportsData={toAirportsData}
              />
            )}
          </div>
        )}
      </div>
      <style jsx>
        {`
          
        `}
      </style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

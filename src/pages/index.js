import Head from 'next/head';
import Link from 'next/link';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { FaPlane, FaUndoAlt, FaSearch } from 'react-icons/fa';
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

import { ButtonArea } from '../components/ButtonArea';
import { CompanyList } from '../components/CompanyList';
import FromAirportInfo from '../components/fromAirportInfo';
import FromAirportPins from '../components/fromAirportPins';
import Pins from '../components/pins';
import ToAirportInfo from '../components/toAirportInfo';
import { ToAirportPins } from '../components/toAirportPins';

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
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
  });

  // クリックした空港
  const [fromAirport, setFromAirport] = useState([]);

  const [clickAirport, setClickAirport] = useState();
  // fromAirportから行けるすべての行先空港リスト・路線　虫眼鏡クリックしたらsetToAirports
  // const [toAirports, setToAirports] = useState([]);
  const [toAirports, setToAirports] = useState([]);

  // toAirportsの中でクリックした行先空港
  const [selectedToAirports, setSelectedToAirports] = useState(null);

  // 行先空港リストの表示、非表示、fromAirportが変わったらfalseにする
  useEffect(() => {
    setSelectedToAirports(false);
  }, [fromAirport]);
  // fromAirportが変わったら変化する

  // 行先空港リストの表示、非表示
  const [isRevealPins, setIsRevealPins] = useState(false);

  // 行先空港リストの表示、非表示、fromAirportが変わったらfalseにする
  useEffect(() => {
    setIsRevealPins(false);
  }, [fromAirport]);

  console.log(selectedToAirports);

  // if (isLoading) return <Loading />;
  return (
    <>
      <Head>
        <title>空港</title>
        {/* ファビコン */}
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐈</text></svg>'
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
              {/* onClickでクリックしたらfromAirportにクリックした空港のデータが入る */}
              <Pins
                setViewport={setViewport}
                setClickAirport={setClickAirport}
                clickAirport={clickAirport}
                setToAirports={setToAirports}
                toAirports={toAirports}
                setSelectedToAirports={setSelectedToAirports}
                selectedToAirports={selectedToAirports}
              />
              {/* onClickでクリックした空港のピンの色が反転 */}
              {/* onClickでクリックした空港の直行できる空港のピン立てる */}
              {/* {toAirports && (
                <ToAirportPins toAirports={toAirports}  />
              )} */}
              <GeolocateControl style={geolocateStyle} />
              <NavigationControl style={navStyle} />
              <ScaleControl style={scaleControlStyle} />
            </ReactMapGL>
          </div>
        </div>
        {/* <!-- Right content --> */}
        {clickAirport && (
          <div className='container_information'>
              {/* <ButtonArea
                  clickAirport={fromAirport}
                  setFromAirport={setFromAirport}
                  ToAirports={toAirports}
                  setToAirports={setToAirports}
                  isRevealPins={isRevealPins}
                  setIsRevealPins={setIsRevealPins}
                /> */}
              <div className='AirportInfoArea'>
                <FromAirportInfo clickAirport={clickAirport} />
                {selectedToAirports && (
                  <ToAirportInfo info={selectedToAirports} allInfo={toAirports} />
                )}
              </div>
              {selectedToAirports && <CompanyList info={selectedToAirports} allInfo={toAirports} />}
          </div>
        )}
      </div>
      <style jsx>
        {`
          // .companyArea {
          //   display: flex;
          //   justify-content: start;
          //   gap: 24px;
          //   flex-wrap: wrap;
          // }
          .AirportInfoArea {
            font-family: vdl-v7marugothic, sans-serif;
            font-weight: 500;
            font-style: normal;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          // .buttonArea {
          //   display: flex;
          //   justify-content: start;
          //   flex-wrap: wrap;
          //   gap: 2em;
          // }
        `}
      </style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

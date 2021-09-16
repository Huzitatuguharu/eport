import Head from 'next/head';
import Link from 'next/link';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { FaPlane, FaUndoAlt, FaSearch } from 'react-icons/fa';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

import useSWR, { SWRConfig } from 'swr';

import { LoadingAnime } from '../components/Loading';
import Company from '../components/company';
import FromAirportInfo from '../components/fromAirportInfo';
import Pins from '../components/pins';
import SelectedPins from '../components/selectedPins';
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

const fullscreenControlStyle = {
  top: 36,
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
//   airportData;の取得
//   ========================================================================== */

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useAirport = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/airport', fetcher, { revalidateOnMount: true });
  console.log(data);

  return {
    airportData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// /* ==========================================================================
//   路線データの取得
//   ========================================================================== */

export const useRoute = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/route', fetcher, { revalidateOnMount: true });
  return {
    routeData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// /* ==========================================================================
//   会社情報の取得
//   ========================================================================== */

export const useCompany = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/company', fetcher, { revalidateOnMount: true });
  return {
    companyData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// /* ==========================================================================
//   ここからページ
//   ========================================================================== */
export default function App() {
  const { routeData } = useRoute();
  const { companyData } = useCompany();
  const { airportData, isLoading } = useAirport();
  // fromAirport
  const [fromAirport, setFomAirport] = useState(null);

  // 行先空港リスト
  const [toAirportLists, setToAirportLists] = useState([]);

  // 路線情報
  const [selectedRouteData, setSelectedRouteData] = useState([]);
  useEffect(() => {
    setSelectedRouteData(false);
  }, [fromAirport]);

  // 行先空港リストの表示、非表示
  const [isRevealPins, setIsRevealPins] = useState(false);
  // 行先空港リストの表示、非表示、fromAirportが変わったらfalseにする
  useEffect(() => {
    setIsRevealPins(false);
  }, [fromAirport]);

  //  空港テーブルから行先空港情報を取り出す
  const getToAirportData = () => {
    // 出発空港のidを定数に設定する
    const fromAirportId = fromAirport.id;
    // 路線テーブルの検索
    const data = routeData.filter(({ from }) => from === fromAirportId);
    setSelectedRouteData(data);
    console.log(data);
    console.log(selectedRouteData);

    // 行先空港情報
    let toAirportsData = [];
    for (let i = 0; i < data.length; i++) {
      toAirportsData.push(airportData.find(({ id }) => id === data[i].to));
    }
    // toAirportListsIdにセットする
    setToAirportLists(toAirportsData);
  };

  //  ボタン押したら行先空港のピンを表示する */

  const onClickGetToAirportData = () => {
    getToAirportData();
    setIsRevealPins(true);
  };

  const onClickReset = () => {
    setFomAirport(null);
  };

  const [toAirportInfo, setToAirportInfo] = useState(null);
  // 行先空港リストの表示、非表示、fromAirportが変わったらfalseにする
  useEffect(() => {
    setToAirportInfo(false);
  }, [fromAirport]);

  // 地図のviewportの設定
  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 135,
    zoom: 3.8,
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
  });

  if (isLoading) return <LoadingAnime />;

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
        {/* <!-- Left content --> */}
        <div className='container_half_left'>
          <div className='map'>
            <ReactMapGL
              {...viewport}
              width='90%'
              height='90vh'
              // satellite、light 、dark 、streets 、outdoors
              mapStyle='mapbox://styles/mapbox/light-v10'
              onViewportChange={setViewport}
              mapboxApiAccessToken={TOKEN}
            >
              {/* onClickでクリックしたらfromAirportにクリックした空港のデータが入る */}
              {airportData && <Pins data={airportData} onClick={setFomAirport} />}
              {/* onClickでクリックした空港のピンの色が反転 */}

              {fromAirport && <SelectedPins data={fromAirport} />}
              {/* onClickでクリックした空港の直行できる空港のピン立てる */}
              {isRevealPins && (
                <ToAirportPins
                  toAirportData={toAirportLists}
                  routeData={selectedRouteData}
                  onClick={setToAirportInfo}
                />
              )}

              <GeolocateControl style={geolocateStyle} />
              <FullscreenControl style={fullscreenControlStyle} />
              <NavigationControl style={navStyle} />
              <ScaleControl style={scaleControlStyle} />
            </ReactMapGL>
          </div>
          {/* <div className='contactArea'>
            <Link href='/contact'>
              <a>お問い合わせ</a>
            </Link>
          </div> */}
        </div>
        {/* <!-- Right content --> */}
        <div className='container_half_right'>
          {/* 空港情報表示する */}
          {/* クリックしたらfromAirportにクリックした空港のデータが入る */}
          {fromAirport && (
            <div className='infoArea'>
              {/* <Company companyData={companyData} /> */}

              <div className='buttonArea'>
                <button className='ButtonClickGetToAirportData' onClick={onClickGetToAirportData}>
                  <FaSearch size={18} color={'#414b5a'} />
                </button>
                <button className='ButtonReset' onClick={onClickReset}>
                  <FaUndoAlt size={18} color={'#414b5a'} />
                </button>
              </div>
              <div className='AirportInfoArea'>
                <FromAirportInfo info={fromAirport} />
                {/* ボタン押したら行先空港のピンを表示する */}
                {/* 行先空港のデータ */}
                {toAirportInfo && <ToAirportInfo info={toAirportInfo} />}
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .infoArea {
            font-family: vdl-v7marugothic, sans-serif;
            font-weight: 500;
            font-style: normal;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 30px 30px;
          }
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
              border-radius: 100px 30px 250px 100px;
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
              border-radius: 100px 30px 250px 100px;
            }
          }
        `}
      </style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

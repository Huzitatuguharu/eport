import Head from 'next/head';
import Link from 'next/link';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { IoAirplane } from 'react-icons/io5';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

import useSWR, { SWRConfig } from 'swr';

import ButtonGetToAirportData from '../components/button';
import CityInfo from '../components/city-info';
import ControlPanel from '../components/control-panel';

import FromAirportInfo from '../components/fromAirportInfo';
import Pins from '../components/pins';
import SelectedPins from '../components/selectedpins';
import ToAirportInfo from '../components/toAirportInfo';
import { ToAirportPins } from '../components/toairportpins';
import { supabase } from '../lib/createSupabaseClient';

// mapboxのトークン
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

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useAirport = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/airport', fetcher);
  return {
    airportData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default function App() {
  const { airportData, isLoading } = useAirport();
  console.log('airport', airportData);

  // popupInfo
  const [popupInfo, setPopupInfo] = useState(null);

  // 行先空港リスト
  const [toAirportLists, setToAirportLists] = useState([]);

  // 行先空港リストの表示、非表示
  const [isRevealPins, setIsRevealPins] = useState(false);
  // 行先空港リストの表示、非表示、popupInfoが変わったらfalseにする
  useEffect(() => {
    setIsRevealPins(false);
  }, [popupInfo]);

  // クリックしたピンをfromAirportに設定
  const getToAirportData1 = async () => {
    // 路線テーブルからfromAirportに一致する路線情報を取り出す
    const fromAirport = popupInfo.id;
    const { data, error } = await supabase.from('route').select().eq('from', fromAirport);
    return data;
  };

  //  空港テーブルから getToairportdata1でつくった路線情報から行先空港情報を取り出す
  const getToAirportData2 = async () => {
    const data = await getToAirportData1();
    // 行先空港情報
    let toAirportListsId = [];

    for (let i = 0; i < data.length; i++) {
      toAirportListsId.push(airportData.find(({ id }) => id === data[i].to));
    }
    // toAirportListsIdにセットする
    setToAirportLists(toAirportListsId);
  };

  //  ボタン押したら行先空港のピンを表示する */

  const onClickGetToAirportData = async () => {
    setIsRevealPins;
    await getToAirportData2();
    setIsRevealPins(true);
  };

  const [toAirportInfo, setToAirportInfo] = useState(null);
  // 行先空港リストの表示、非表示、popupInfoが変わったらfalseにする
  useEffect(() => {
    setToAirportInfo(false);
  }, [popupInfo]);

  // 地図のviewportの設定
  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 135,
    zoom: 3.8,
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
  });
  if (isLoading) return <p>ロード中！！</p>;

  return (
    <>
      <Head>
        {/* ファビコン */}
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>👀</text></svg>'
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
              {/* onClickでクリックしたらpopupInfoにクリックした空港のデータが入る */}
              {airportData && <Pins data={airportData} onClick={setPopupInfo} />}
              {/* onClickでクリックした空港のピンの色が反転 */}

              {popupInfo && <SelectedPins data={popupInfo} />}
              {/* onClickでクリックした空港の直行できる空港のピン立てる */}
              {isRevealPins && <ToAirportPins data={toAirportLists} onClick={setToAirportInfo} />}

              <GeolocateControl style={geolocateStyle} />
              <FullscreenControl style={fullscreenControlStyle} />
              <NavigationControl style={navStyle} />
              <ScaleControl style={scaleControlStyle} />
            </ReactMapGL>
          </div>
          <Link href='/contact'>
            <a>お問い合わせ</a>
          </Link>
        </div>
        {/* <!-- Right content --> */}
        <div className='container_half_right'>
          {/* 空港情報表示する */}
          <div className='topArea'>
            <h1>{/* <span className='text-gradient'>Airport</span> */}</h1>
            {/* クリックしたらpopupInfoにクリックした空港のデータが入る */}
            {popupInfo && (
              <>
                <FromAirportInfo info={popupInfo} />
                {/* ボタン押したら行先空港のピンを表示する */}
                <button className='ButtonClickGetToAirportData' onClick={onClickGetToAirportData}>
                  <IoAirplane></IoAirplane>直行便
                </button>
              </>
            )}
            {/* 行先空港のデータ */}
            {toAirportInfo && (
              <>
                <ToAirportInfo info={toAirportInfo} />
                {/* ボタン押したら行先空港のピンを表示する */}
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            color: #333;
          }
          .container_half_left {
            flex: 1;
          }
          .container_half_right {
            flex: 1;
            background: #6fb7ff;
          }
          .topArea {
            margin: 20px;
            font-family: vdl-v7marugothic, sans-serif;
            font-weight: 500;
            font-style: normal;
          }
          .text-gradient {
            font-size: 4rem;
            display: inline-block;
            background: linear-gradient(45deg, #54d0ff, #9f92ff 20%, #ff7689 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .map {
            margin: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .ButtonClickGetToAirportData {
            margin: 30px;
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
            &:hover {
              background-color: #46cdcf;
              color: #fff;
              cursor: pointer;
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

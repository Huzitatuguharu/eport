import Head from 'next/head';
import Link from 'next/link';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

import CityInfo from '../components/city-info';
import ControlPanel from '../components/control-panel';
import Pins from '../components/pins';
import SelectedPins from '../components/selectedpins';
import { ToAirportPins } from '../components/toairportpins';
import TopInfo from '../components/topinfo';
import { supabase } from '../lib/createSupabaseClient';

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

export default function App() {
  // mapboxのトークン
  const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;

  // 初期値nullにしない！！全ての空港情報
  const [airportData, setAirportData] = useState([]);
  // すべての空港の情報取得
  useEffect(() => {
    getAirportData();
  }, []);

  // ここからSupabaseに接続
  const getAirportData = async () => {
    const { data, error } = await supabase.from('airport').select();
    setAirportData(data);
  };

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

  return (
    <>
      <Head>
        {/* Googleフォント */}
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap'
          rel='stylesheet'
        ></link>
        {/* ファビコン */}
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>👀</text></svg>'
        ></link>
      </Head>
      <div className='wrapper'>
        {/* 空港情報表示する */}
        <div className='topArea'>
          <h1>
            <span className='text-gradient'>Airport</span>
          </h1>
          {/* クリックしたらpopupInfoにクリックした空港のデータが入る */}
          {popupInfo && (
            <>
              <TopInfo info={popupInfo} />
              {/* ボタン押したら行先空港のピンを表示する */}
              <button onClick={onClickGetToAirportData}>行先</button>
            </>
          )}
        </div>
        {/* マップ表示 */}
        <div className='map'>
          <ReactMapGL
            {...viewport}
            width='60%'
            height='60vh'
            // satellite、light 、dark 、streets 、outdoors
            mapStyle='mapbox://styles/mapbox/light-v10'
            onViewportChange={setViewport}
            mapboxApiAccessToken={TOKEN}
          >
            {/* onClickでクリックしたらpopupInfoにクリックした空港のデータが入る */}

            <Pins data={airportData} onClick={setPopupInfo} />
            {/* onClickでクリックした空港のピンの色が反転 */}

            {popupInfo && <SelectedPins data={popupInfo} />}
            {/* onClickでクリックした空港の直行できる空港のピン立てる */}
            {isRevealPins && <ToAirportPins data={toAirportLists} onClick={setToAirportInfo} />}
            {toAirportInfo && (
              <Popup
                tipSize={5}
                anchor='top'
                longitude={toAirportInfo.longitude}
                latitude={toAirportInfo.latitude}
                closeOnClick={true}
                onClose={setToAirportInfo}
              >
                <CityInfo info={toAirportInfo} />
              </Popup>
            )}
            <GeolocateControl style={geolocateStyle} />
            <FullscreenControl style={fullscreenControlStyle} />
            <NavigationControl style={navStyle} />
            <ScaleControl style={scaleControlStyle} />
          </ReactMapGL>
        </div>
      </div>

      <style jsx>{`
        .topArea {
          display: flex;
          align-items: center;
          margin: 20px;
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
      `}</style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

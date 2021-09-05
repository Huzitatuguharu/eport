import Head from 'next/head';
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
import { supabase } from '../lib/Supabase';

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

  // 初期値nullにしない！！
  const [airportdata, setAirportdata] = useState([]);

  // ここからSupabaseに接続
  const getairportdata = async () => {
    const { data, error } = await supabase.from('airport').select();
    setAirportdata(data);
  };

  useEffect(() => {
    getairportdata();
    console.log('useEffectが実行されました');
  }, []);

  // 地図のviewportの設定
  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 135,
    zoom: 4.5,
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    bearing: -10,
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
    pitch: 30,
  });

  // popupInfoの切り替え
  const [popupInfo, setPopupInfo] = useState(null);
  console.log('popupInfo', popupInfo);

  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Rampart+One&display=swap'
          rel='stylesheet'
        />
      </Head>
      <h1>空港マップ</h1>
      <p>クリックすると空港名が表示されます</p>
      <ReactMapGL
        {...viewport}
        width='100vw'
        height='80vh'
        // satellite、light 、dark 、streets 、outdoors
        mapStyle='mapbox://styles/mapbox/light-v10'
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={airportdata} onClick={setPopupInfo} />

        {popupInfo && (
          <Popup
            tipSize={5}
            // popupの配置
            anchor='top'
            // 緯度経度
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            // mapをクリックするとpoopup閉じる
            closeOnClick={false}
            // Closeボタン推したらsetPopupInfoのリセット
            // onClose={() => setPopupInfo(null)}
            onClose={setPopupInfo}
            className='container'
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>
      <style jsx>{``}</style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

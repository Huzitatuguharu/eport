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
import useSWR from 'swr';

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
  const [todata, setTodata] = useState([]);

  // popupInfo
  const [popupInfo, setPopupInfo] = useState(null);
  console.log('popupInfo', popupInfo);

  // ここからSupabaseに接続
  const getairportdata = async () => {
    const { data, error } = await supabase.from('airport').select();
    setAirportdata(data);
  };

  useEffect(() => {
    getairportdata();
  }, []);

  // ここから路線のロジック
  // popupInfoのidをfromairport

  const fromairport = popupInfo?.id;
  console.log(fromairport);

  // ここからSupabaseに接続,setFromdata
  //  latitude: number;
  //  longitude: number;
  const gettroutedata = async () => {
    const abc = {
      number: 1,
      name: 2,
    };
    const { data, error } = await supabase
      .from('airport')
      .select('latitude,longitude')
      .eq('id', abc.name);
    console.log(data);
    setTodata(data);
  };

  useEffect(() => {
    gettroutedata();
    console.log('useEffectが実行されました');
  }, [fromairport]);

  if (fromairport != null) {
    console.log(fromairport);
    // setFromdata(fromairport);
    // console.log(fromdata);

    // useEffect(() => {
    //   console.log('gettoairportdataが実行されました');
    //   gettoairportdata();
    // }, [fromairport]);
  }

  // fromairport一致するtoairport
  // toairportの空港idから緯度経度取得

  // 緯度経度をピンに渡す

  // const { data, error } = await supabase.from('route').select(`
  //   toairport,
  //   route (
  //     to
  //   )
  // `);

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
      <Link href='https://code-kitchen.dev/html/a/'>
        <a>Webサイト</a>
      </Link>
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
            tipSize={3}
            // popupの配置
            anchor='top'
            // 緯度経度
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            // mapをクリックするとpoopup閉じる
            closeOnClick={true}
            closeOnMove={true}
            // Closeボタン推したらsetPopupInfoのリセット
            // onClose={() => setPopupInfo(null)}
            onClose={setPopupInfo}
            className='container'
          >
            <CityInfo info={popupInfo} />
            <button onClick={() => getroutedata()}>決定</button>
            <p>{popupInfo.id}</p>
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

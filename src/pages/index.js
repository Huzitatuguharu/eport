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

import useSWR, { SWRConfig } from 'swr';
import useSWRImmutable from 'swr/immutable';
import CityInfo from '../components/city-info';
import ControlPanel from '../components/control-panel';
import Pins from '../components/pins';
import SelectedPins from '../components/selectedpins';
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

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('./api/airport.ts', fetcher);

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
    zoom: 3.8,
    // 北から反時計回りに度で測定された、マップの初期方位（回転）
    // 画面の平面（0-85）からの角度で測定されたマップの初期ピッチ（傾斜）
  });

  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='wrapper'>
        <div className='toparea'>
          <h1>空港マップ</h1>

          {popupInfo && <TopInfo info={popupInfo} />}
        </div>
        <div className='map'>
          <ReactMapGL
            {...viewport}
            width='80%'
            height='80vh'
            // satellite、light 、dark 、streets 、outdoors
            mapStyle='mapbox://styles/mapbox/light-v10'
            onViewportChange={setViewport}
            mapboxApiAccessToken={TOKEN}
          >
            <Pins data={airportdata} onClick={setPopupInfo} />

            {popupInfo && <SelectedPins data={popupInfo} />}

            <GeolocateControl style={geolocateStyle} />
            <FullscreenControl style={fullscreenControlStyle} />
            <NavigationControl style={navStyle} />
            <ScaleControl style={scaleControlStyle} />
          </ReactMapGL>
        </div>
      </div>

      <style jsx>{`
        .toparea {
          display: flex;
          align-items: center;

          margin: 20px;
        }
        // .wrapper {
        //   display: block;
        //   margin: 20px;
        // }
      `}</style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

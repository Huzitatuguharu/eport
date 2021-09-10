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
import { Toairportpin } from '../components/toairportpins';
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

  // popupInfo
  const [popupInfo, setPopupInfo] = useState(null);

  // 行先空港リスト
  const [toairportlists, setToairportlists] = useState([]);

  // 行先空港リストの表示
  const [isRevealpins, setIsRevealpins] = useState(false);

  useEffect(() => {
    getairportdata();
  }, []);

  // ここからSupabaseに接続
  const getairportdata = async () => {
    const { data, error } = await supabase.from('airport').select();
    setAirportdata(data);
  };

  const getToairportdata1 = async () => {
    const fromairport = popupInfo.id;
    const { data, error } = await supabase.from('route').select().eq('from', fromairport);
    console.log('data1', data);
    return data;
  };

  const getToairportdata2 = async () => {
    const data = await getToairportdata1();
    console.log(data[0].to);
    console.log(airportdata);
    let toairportlistsid = [];

    for (let i = 0; i < data.length; i++) {
      toairportlistsid.push(airportdata.find(({ id }) => id === data[i].to));
      console.log(toairportlistsid);
    }
    console.log('toairportlistsid', toairportlistsid);
    setToairportlists(toairportlistsid);
  };

  const onClickgetToairportdata = () => {
    getToairportdata2();
    setIsRevealpins(true);
  };

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
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>👀</text></svg>'
        ></link>
      </Head>
      <div className='wrapper'>
        <div className='toparea'>
          <h1>空港マップ</h1>

          {popupInfo && (
            <>
              <TopInfo info={popupInfo} />
              <button onClick={onClickgetToairportdata}>行けるのは</button>
            </>
          )}
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
            {isRevealpins && <Toairportpin data={toairportlists} />}

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
      `}</style>
      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

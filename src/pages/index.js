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

import CITIES from '../components/cities.json';
import CityInfo from '../components/city-info';
import ControlPanel from '../components/control-panel';
import Pins from '../components/pins';
import { supabase } from '../lib/Supabase';

// const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY; // Set your mapbox token here

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
  const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY; // Set your mapbox token here
  const onClickgetdata = async () => {
    const { data, error } = await supabase.from('airport').select();
    console.log(data);

    let arr2 = data.map(aaa => aaa.name);

console.log(arr2);

//  {data.map((airport) =>(
//           // titleとidを取得する。${}で変数の指定
//           <p>{ `${airport.tnametle}(ユーザー：${todo.id})`}</p>
//         ))}
    setAirportdata(data);

  };

  useEffect(() => {
    onClickgetdata();
    console.log('useEffectが実行されました');
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 135,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });

  // 初期値nullにしない！！
  const [airportdata, setAirportdata] = useState([]);
  console.log(airportdata);

  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <>
      <ReactMapGL
        {...viewport}
        width='100vw'
        height='100vh'
        mapStyle='mapbox://styles/mapbox/dark-v9'
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={airportdata} onClick={setPopupInfo} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor='top'
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>

      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}

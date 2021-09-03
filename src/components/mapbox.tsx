import * as React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { Airport } from './Airport';

type Maptype = {
  latitude: number;
  longitude: number;
};

export const MAP: React.VFC<Maptype> = ({ latitude, longitude }) => {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY; // Set your mapbox token here

  const [showPopup, togglePopup] = React.useState(true);

  const [viewport, setViewport] = React.useState({
    longitude: 135,
    latitude: 37,
    zoom: 5,
  });

  const onclickOpen = () => {
    togglePopup(true);
  };

  const onclickClose = () => {
    togglePopup(false);
  };

  return (
    <>
      <Airport/>
      <button onClick={onclickOpen}>表示</button>
      <button onClick={onclickClose}>閉じる</button>
      <ReactMapGL
        {...viewport}
        width='100vw'
        height='100vh'
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {showPopup && (
          <Popup
            latitude={latitude}
            longitude={longitude}
            closeButton={true}
            closeOnClick={true}
            onClose={() => togglePopup(false)}
            anchor='top'
          >
            <div>You are here</div>
          </Popup>
        )}

        <Marker latitude={latitude} longitude={longitude}>
          <div>あ</div>
      </Marker>

      </ReactMapGL>
    </>
  );
};

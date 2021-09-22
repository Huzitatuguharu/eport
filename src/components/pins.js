import * as React from 'react';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { RiMapPin3Fill, RiMapPin3Line } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { useAirport, useRoute, useCompany } from '../hooks/useConnectSupabase';

import { FromAirportPins } from './fromAirportPins';
import{ ToAirportPins} from './toAirportPins';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pin_size_normal = 12;

function Pins(props) {
  const { airportData, isLoading } = useAirport();
  const { routeData } = useRoute();
  const { companyData } = useCompany();
  const {
    setViewport,
    setClickAirport,
    setToAirports,
    clickAirport,
    toAirports,
    setSelectedToAirports,
    selectedToAirports,
  } = props;


  let toAirportsData = [];

  const getToAirportData = (city) => {
    setSelectedToAirports(null);
    // 路線テーブルの検索
    let makeRouteData = routeData.filter(({ from }) => from === city.airportid);

    let toAirportsData = [];
    if (makeRouteData) {
      for (let i = 0; i < makeRouteData.length; i++) {
        toAirportsData[i] = {
          ...airportData.find(({ airportid }) => airportid === makeRouteData[i].to),
          ...makeRouteData[i],
        };
      };

      for (let j = 0; j < toAirportsData.length; j++) {
        toAirportsData[j] = {
          ...toAirportsData[j],
          ...companyData.find(({ companyid }) => companyid === toAirportsData[j].routecompany),
        };
      }
    }
    setClickAirport(city);
    console.log('toAirportsDatapins', toAirportsData);
    // if(toAirportsData.length>0)setToAirports(toAirportsData);
    setToAirports(toAirportsData);
    setViewport({
      latitude: 33,
      longitude: 135,
      zoom: 3.8,
    });
  };
console.log(toAirportsData);
  if (isLoading) return <p>ロード中</p>;
  return (
    <>
      {airportData?.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          value={city.airportid}
          longitude={city.longitude}
          latitude={city.latitude}
        >
          <svg
            height={pin_size_normal}
            viewBox='0 0 24 24'
            style={{
              cursor: 'pointer',
              fill: '#65666e',
              stroke: 'none',
              transform: `translate(${-pin_size_normal / 2}px,${-pin_size_normal}px)`,
            }}
            onClick={() => getToAirportData(city)}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      ))}
      {clickAirport && <FromAirportPins clickAirport={clickAirport} />}
      {/* <ToAirportPins toAirports={toAirports} onClick={setSelectedToAirports} /> */}

      {toAirports && <ToAirportPins toAirports={toAirports} onClick={setSelectedToAirports} />}
    </>
  );
}
export default React.memo(Pins);

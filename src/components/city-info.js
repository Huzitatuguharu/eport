import * as React from 'react';

function CityInfo(props) {
  const { info } = props;
  const AirportName = `${info.name}`;
  const AirportICAO = `${info.icao}`;
  const AirportIATA = `${info.iata}`;


  return (
    <div className='container'>
      <div>
        <p>空港👀　{AirportName} </p>
        <p>ICAO🐈　{AirportICAO} </p>
        <p>IATA🐕　{AirportIATA} </p>
      </div>
      <style jsx>{`
        div {
          margin: 40px;
        }
        p {
          color: #0080c0;
        }
      `}</style>
    </div>
  );
}

export default React.memo(CityInfo);

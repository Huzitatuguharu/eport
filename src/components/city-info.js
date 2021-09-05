import * as React from 'react';

function CityInfo(props) {
  const { info } = props;
  const AirportName = `${info.name}`;
  const AirportICAO = `${info.icao}`;
  const AirportIATA = `${info.iata}`;
  // console.log('ラウンジ', info.lounge);

  // const AirportLounge = info.lounge;

  // var AirportLoungeMark = AirportLounge == 0 ? '×' : '〇';
  // console.log(AirportLoungeMark); // "ビール"

  return (
    <div className='container'>
      <div>
        <p>空港👀　{AirportName} </p>
        <p>ICAO🐈　{AirportICAO} </p>
        <p>IATA🐕　{AirportIATA} </p>
        {/* {
    if (`${info.lounge}== "0") {
     ` <p>ラウンジ🤖　× </p>`
        } else if (`${info.lounge} == "1") {
      ` <p>ラウンジ🤖　〇 </p>`
    }
  } */}
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

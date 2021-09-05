import * as React from 'react';

function CityInfo(props) {
  const { info } = props;
  const displayName = `${info.name}`;

  return (
    <div className='container'>
      <div>
        <p>{displayName} </p>
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

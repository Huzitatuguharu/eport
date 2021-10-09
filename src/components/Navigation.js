import Image from 'next/image';
import * as React from 'react';

const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';

const pin_size_normal = 18;

export const Navigation = (props) => {
  const { setClickAirport, setSelectedToAirport, setToAirportsData } = props;

  const clickAirportReset = () => {
    setClickAirport();
    setSelectedToAirport();
    setToAirportsData([]);
  };
  return (
    <section className='nav_box'>
      <p className='nav_comment'>
        空港の
        <svg height={pin_size_normal} viewBox='0 0 24 24'>
          <path d={ICON} />
        </svg>
        を選択する
      </p>
      <button className='button_reset tooltip' onClick={clickAirportReset}>
        <span className='tooltip_text'>空港を選びなおす</span>
        <Image src='/reset.svg' alt='reload' width={24} height={24} size='fixed' />
      </button>
      <style jsx>{`
        .nav_box {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .nav_comment {
          font-family: 'mamelon';

          color: #414b5a;
          font-size: 1.2em;
          font-weight: 500;
          font-style: normal;
        }
        button {
          border-radius: 16px;
          border: none;
          width: 50px;
          height: 50px;
          background: #edfafd;
          box-shadow: 8px 8px 10px #e1eef0, -8px -8px 10px #f9ffff;
          &:active {
            background: #edfafd;
            box-shadow: inset 8px 8px 10px #e1eef0, inset -8px -8px 10px #f9ffff;
          }
          &:hover {
            background-color: #c1e1ff;
            cursor: pointer;
          }
        }
        .tooltip {
          position: relative;
        }
        .tooltip_text {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -35px;
          display: inline-block;
          padding: 8px;
          white-space: nowrap;
          font-size: 0.7rem;
          line-height: 1.3;
          background: #000046;
          color: #fff;
          border-radius: 3px;
          transition: 0.3s ease-in;
        }
        .tooltip:hover .tooltip_text {
          opacity: 1;
          visibility: visible;
        }
        .tooltip_text:before {
          content: '';
          position: absolute;
          top: -13px;
          left: 50%;
          margin-left: -7px;
          border: 7px solid transparent;
          border-bottom: 7px solid #000046;
        }
      `}</style>
    </section>
  );
};

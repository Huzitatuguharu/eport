import Image from 'next/image';
import * as React from 'react';
const ICON =
  'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';
export const Navigation = (props) => {
  const { setClickAirport, setSelectedToAirport, setToAirportsData } = props;

  const clickAirportReset = () => {
    setClickAirport();
    setSelectedToAirport();
    setToAirportsData([]);
  };
  return (
    <section className='nav_box'>
      <div className='nav_comment_static'>
        <p>空港を選択する</p>
        <button className='button_reset tooltip' onClick={clickAirportReset}>
          <span className='tooltip_text'>空港を選びなおす</span>
          <Image src='/reset.svg' alt='reload' width={24} height={24} size='fixed' />
        </button>
      </div>
      <div className='nav_comment_flexible'>
        <p>
          <svg
            style={{
              fill: '#9CA3AF',
              width: '24px',
              height: '24px',
            }}
          >
            <circle cx='10' cy='10' r='5' />
          </svg>
          空港
        </p>
        <p>
          <svg
            style={{
              fill: '#9CA3AF',
              width: '24px',
              height: '24px',
            }}
          >
            <path d={ICON} />
          </svg>
          直行便あり
        </p>
        <p>
          <svg
            style={{
              fill: '#31b1ff',
              width: '24px',
              height: '24px',
            }}
          >
            <path d={ICON} />
          </svg>
          選択空港
        </p>
      </div>

      <style jsx>{`
        .nav_box {
          padding: 0 10px;
          display: grid;
          gap: 20px;
        }
        .nav_comment_static {
          font-family: 'mamelon';
          color: #414b5a;
          font-size: 1.2rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .nav_comment_flexible {
          font-family: 'mamelon';
          color: #414b5a;
          font-size: 0.8rem;
          display: flex;
          gap: 15px;
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
export default React.memo(Navigation);

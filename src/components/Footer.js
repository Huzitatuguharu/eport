import * as React from 'react';

export const Footer = (props) => {
  const { setClickAirport, setSelectedToAirport, setToAirportsData } = props;
  return (
    <>
      <footer className='container_footer'>
        <a
          className='tooltip'
          href='https://www.google.com/flights?hl=ja'
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className='material-icons'>flight</span>
          <span className='tooltip_text'>GoogleFlights</span>
        </a>
        <a
          className='tooltip'
          href='https://github.com/Huzitatuguharu/map_nextjs'
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className='material-icons'>code</span>
          <span className='tooltip_text'>GitHub</span>
        </a>
        <a
          className='tooltip'
          href='https://www.figma.com/@yuyuyu__0222'
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className='material-icons'>brush</span>
          <span className='tooltip_text'>Figma</span>
        </a>
      </footer>
      <style jsx>{`
        .container_footer {
          display: flex;
          align-items: center;
          bottom: 20px;
          left: 20px;
          width: 100%;
          gap: 20px;
          padding: 0 10px;
        }
        .nav_comment {
          font-family: 'mamelon';
          color: #414b5a;
          font-size: 1.2em;
          font-weight: 500;
          font-style: normal;
        }
        a {
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
          top: -35px;
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
          top: 100%;
          left: 50%;
          margin-left: -7px;
          border: 7px solid transparent;
          border-top: 7px solid #000046;
        }
        .material-icons {
          position: absolute;
          top: 12px;
          left: 12px;
        }
      `}</style>
    </>
  );
};
export default React.memo(Footer);

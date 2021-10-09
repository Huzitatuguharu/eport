import Image from 'next/image';
import Link from 'next/link';

import * as React from 'react';

import { Accordion } from './base/Accordion';

export function CompanyList(props) {
  const { selectedToAirport, toAirportsData } = props;
  const fromAirport = selectedToAirport.airportname;
  const all = toAirportsData;
  let companyArr = all.filter(({ airportname }) => airportname === fromAirport);

  // const theme = {
  //   fontFamily: {
  //     japan: 'mamelon',
  //     // 300500
  //     english: 'Varela Round',
  //   },
  //   colors: {
  //     text: '#333',
  //     background: '#fff',
  //     link: '#1eaaf1',
  //     linkHover: '#0d8ecf',
  //     border: '#ddd',
  //     warning: '#fff3cd',
  //     success: '#d4edda',
  //   },
  // };
  return (
    <>
      <div className='companyArea'>
        {companyArr?.map((company, index) => (
          <Accordion
            className='companycard'
            companyName={company.companyname}
            key={`company-${index}`}
          >
            <div className='company_code'>
              <p>{company.companyicao}</p>
              <p>{company.companyiata}</p>
            </div>
            <p className='companyLink'>
              <a
                className='companyLinkIcon'
                href={company.companyurl}
                rel='noopener noreferrer'
                target='_blank'
              >
                公式サイト
              </a>
            </p>
            <p>
              <a
                className='companyairplane'
                href={company.companyairplane}
                rel='noopener noreferrer'
                target='_blank'
              >
                機体情報
              </a>
            </p>
            {/* <div className='companyCard_under' key={`company-${index}`}>
              <p className='companyicao'>{company.companyicao}</p>
            </div> */}
          </Accordion>
        ))}
        <style jsx>
          {`
            .companyArea {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              gap: 16px 24px;
            }
            .company_code {
              font-family:  'Varela Round';
              font-weight: 500;
              font-size: 0.8em;
              display: flex;
              gap: 20px;
              color: #606f86;
            }
            .companyLink {
              margin: 16px 0 0;
            }
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
          `}
        </style>
      </div>
    </>
  );
}
export default React.memo(CompanyList);

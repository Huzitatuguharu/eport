import Link from 'next/link';
import * as React from 'react';
import { FaPlaneArrival, FaPlaneDeparture, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import theme from '../../styles/theme';

import { Accordion } from './base/Accordion';

export function CompanyList(props) {
  const { selectedToAirport, toAirportsData } = props;
  const fromAirport = selectedToAirport.airportname;
  const all = toAirportsData;
  let companyArr = all.filter(({ airportname }) => airportname === fromAirport);

  return (
    <>
      <div className='companyArea'>
        {companyArr?.map((company, index) => (
          <Accordion companyName={company.companyname} key={`company-${index}`}>
            <div className='companyCard_top'>
              <a
                className='companyLinkIcon'
                href={company.companyurl}
                rel='noopener noreferrer'
                target='_blank'
              >
                <FaExternalLinkAlt size={12} color={'#414b5a'} />
              </a>
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
            </div>
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
            .companyCard {
              width: 100%;
              outline: none;
              display: flex;
              flex-direction: column;
              gap: 8px;
              border: none;
              color: #414b5a;
              padding: 18px;
              border-radius: 16px;
              background: #edfafd;
              box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
              &:hover {
                background-color: #c1e1ff;
                cursor: pointer;
              }
              &:active {
                background: #edfafd;
                box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
              }
            }

            .companyCard_top {
              display: flex;
              gap: 0.5em;
            }
            .companyicao {
              font-family: ${theme.fontFamily.english};
              font-weight: 500;
              display: flex;
              gap: 1em;
              font-size: 0.9em;
              color: #606f86;
            }
          `}
        </style>
      </div>
    </>
  );
}
export default React.memo(CompanyList);

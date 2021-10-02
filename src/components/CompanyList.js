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
          <Accordion
            className='companycard'
            companyName={company.companyname}
            key={`company-${index}`}
          >
            <p className='companyLink'>
              <a
                className='companyLinkIcon'
                href={company.companyurl}
                rel='noopener noreferrer'
                target='_blank'
              >
                公式サイト
                <FaExternalLinkAlt size={12} color={'#414b5a'} />
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
            .companyicao {
              font-family: ${theme.fontFamily.english};
              font-weight: 500;
              display: flex;
              gap: 1em;
              font-size: 0.9em;
              color: #606f86;
            }
            .companyLink {
              margin:24px 0 0;
            }
          `}
        </style>
      </div>
    </>
  );
}
export default React.memo(CompanyList);

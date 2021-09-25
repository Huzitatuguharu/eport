import Link from 'next/link';
import * as React from 'react';
import theme from '../../styles/theme';
import { useCompany } from '../hooks/useConnectSupabase';

export function CompanyList(props) {
  const { selectedToAirport, toAirportsData } = props;
  const fromAirport = selectedToAirport.airportname;
  const all = toAirportsData;
  let companyArr = all.filter(({ airportname }) => airportname === fromAirport);

  return (
    <>
      <div className='companyArea'>
        {companyArr?.map((company, index) => (
          <div className='companyCard' key={`company-${index}`}>
            <p className='companyName'>{company.companyname}</p>
            <p className='companyicao'>{company.companyicao}</p>
            <a href={company.companyurl} rel='noopener noreferrer' target='_blank'>
              公式サイト
            </a>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .companyArea {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 16px;
          }
          .companyCard {
            margin: auto;
            width: 80%;
            outline: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border: none;
            color: #414b5a;
            padding: 12px;
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
          .companyName {
            font-size: 1.1em;
            font-family: ${theme.fontFamily.japan};
            color: #414b5a;
            font-weight: 500;
            font-style: normal;
            display: flex;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
export default React.memo(CompanyList);

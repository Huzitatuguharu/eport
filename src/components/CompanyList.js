import Link from 'next/link';
import * as React from 'react';
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
          <button className='companyName' key={`company-${index}`}>
            <Link href={company.companyurl}>
              <a rel='noopener noreferrer' target='_blank'>
                {company.companyicao}
              </a>
            </Link>
          </button>
        ))}
      </div>

      <style jsx>
        {`
          .companyArea {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          button {
            font-family: 'Ubuntu', sans-serif;
            font-size: 12px;
            outline: none;
            border: none;
            color: #414b5a;
            padding: 12px;
            border-radius: 16px;
            background: #edfafd;
            box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
            width: 60px;
            height: 58px;
            &:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
            }
          }
        `}
      </style>
    </>
  );
}
export default React.memo(CompanyList);

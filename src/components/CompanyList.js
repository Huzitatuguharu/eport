import Link from 'next/link';
import * as React from 'react';
import { useCompany } from '../hooks/useConnectSupabase';

export function CompanyList(props) {
  const { info, allInfo } = props;
  const { companyData } = useCompany();
  console.log('info', info);
  console.log('allInfo', allInfo);
  const fromAirport = info.airportname;
  const all = allInfo;
  let newArr = all.filter(({ airportname }) => airportname === fromAirport);

  console.log(newArr);
  // console.log(newArr[0]companyurl);
  return (
    <>
      <div className='companyArea'>
        {newArr?.map((company, index) => (
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
            justify-content: flex-end;

            gap: 24px;
            flex-wrap: wrap;
            margin-top: 64px;
          }
          button {
            font-family: 'Ubuntu', sans-serif;
            font-size: 12px;
            outline: none;
            border: none;
            color: #414b5a;
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
{
  /* <div className='companyArea'>
        {companyData?.map((company, index) => (
          <button className='companyName' key={`company-${index}`}>
            <Link href={company.companyurl}>
              <a rel='noopener noreferrer' target='_blank'>
                {company.companyicao}
              </a>
            </Link>
          </button>
        ))} */
}

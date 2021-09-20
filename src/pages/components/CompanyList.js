import Link from 'next/link';
import * as React from 'react';

import { IconContext } from 'react-icons';
import { RiMapPin3Fill, RiMapPin3Line } from 'react-icons/ri';

import { Marker } from 'react-map-gl';
import useSWR, { SWRConfig } from 'swr';
import { useCompany } from '../hooks/useConnectSupabase';

export function CompanyList(props) {
  const { info, allInfo } = props;
  const { companyData } = useCompany();
  console.log('info', info);
  console.log('allInfo', allInfo);

  const newArr = allInfo.filter(({ airportname }) => airportname === info.airportname);

  console.log(newArr);

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
        {/* <div className='companyArea'>
        {companyData?.map((company, index) => (
          <button className='companyName' key={`company-${index}`}>
            <Link href={company.companyurl}>
              <a rel='noopener noreferrer' target='_blank'>
                {company.companyicao}
              </a>
            </Link>
          </button>
        ))} */}
        <style jsx>
          {`
            .companyArea {
              display: flex;
              justify-content: start;
              gap: 24px;
              flex-wrap: wrap;
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
      </div>
    </>
  );
}

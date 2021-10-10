import * as React from 'react';

export function CompanyList(props) {
  const { selectedToAirport, toAirportsData } = props;
  const fromAirport = selectedToAirport.airportname;
  const all = toAirportsData;
  let companyArr = all.filter(({ airportname }) => airportname === fromAirport);

  return (
    <>
      <div className='companyArea'>
        {companyArr?.map((company, index) => (
          <details key={`company-${index}`} className='companyCard'>
            <summary className='summary'>{company.companyname}</summary>
            <div className='company_code'>
              <p>{company.companyicao}</p>
              <p>{company.companyiata}</p>
            </div>
            <div className='company_detail'>
              <a
                className='companyLink'
                href={company.companyurl}
                rel='noopener noreferrer'
                target='_blank'
              >
                公式サイト
              </a>
              <a
                className='companyAirplane'
                href={company.companyairplane}
                rel='noopener noreferrer'
                target='_blank'
              >
                機体情報
              </a>
            </div>
          </details>
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
              display: flex;
              gap: 10px;
            }
            .summary {
              font-family: filson-soft, 'mamelon', sans-serif;
              font-weight: 400;
              color: #414b5a;
              padding: 18px;
              border-radius: 16px;
              background: #edfafd;
              box-shadow: -8px -8px 13px rgba(255, 255, 255, 0.8), 8px 8px 13px #d1dcdf;
              margin: auto;
              display: flex;
              align-items: center;
              gap: 10px;
            }
            summary:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            summary:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
            }
            summary::before {
              font-family: 'Material Icons';
              content: '\e145';
            }
            details[open] {
              color: #414b5a;
              border-radius: 16px;
              background: #edfafd;
              box-shadow: -8px -8px 13px rgba(255, 255, 255, 0.8), 8px 8px 13px #d1dcdf;
              margin: auto;
            }
            details[open] summary {
              color: #0040a0;
              font-weight: 500;
              background: #edfafd;
              box-shadow: none;
              margin: auto;
              display: flex;
              align-items: center;
            }

            details[open] .summary:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            details[open] summary:before {
              transform: rotateZ(45deg);
            }

            .company_code {
              font-family: filson-soft, sans-serif;
              font-weight: 400;
              font-size: 0.8em;
              display: flex;
              color: #606f86;
              padding: 10px 20px;
              gap: 16px;
            }
            .company_detail {
              font-family: 'mamelon', sans-serif;
              color: #606f86;
              padding: 0 20px 18px;
              display: flex;
              gap: 50px;
            }
            .company_detail > a :hover {
              color: #0040a0;
              cursor: pointer;
            }
            .companyLink {
              position: relative;
            }
            .companyLink::after {
              font-family: 'Material Icons';
              content: '\e89e';
              position: absolute;
              right: -20px;
            }
            .companyAirplane {
              position: relative;
            }
            .companyAirplane::after {
              font-family: 'Material Icons';
              content: '\e539';
              position: absolute;
              right: -20px;
            }
          `}
        </style>
      </div>
    </>
  );
}
export default React.memo(CompanyList);

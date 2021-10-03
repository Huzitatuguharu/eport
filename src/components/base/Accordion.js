import Image from 'next/image';
import { useState } from 'react';
import * as React from 'react';
import theme from '../../../styles/theme';

export const Accordion = (props) => {
  const { companyName } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen ? true : false);
  };

  return (
    <div className='accordion' onClick={toggle}>
      <div className='accordion-title'>
        <p className='companyName'>{companyName} </p>
        <p className='toggle' aria-expanded={isOpen}>
          <Image className='icon_toggle' src='/toggle.svg' alt='toggle' width={20} height={20} />
        </p>
      </div>
      <div className='accordion-content' aria-expanded={!isOpen}>
        {props.children}
      </div>
      {/* <style jsx>{`
        .companyName {
          transform: ${isOpen == false ? 'rotate(0deg)' : 'rotate(-3deg)'};
        }
      `}</style> */}
      <style jsx>
        {`
          .accordion {
            cursor: pointer;
            width: 100%;
            outline: none;
            display: flex;
            flex-direction: column;
            border: none;
            color: #414b5a;
            padding: 18px;
            border-radius: 16px;
            background: #edfafd;
            box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
            &:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
            }
          }
          .accordion-title {
            font-size: 18px;
            color: #3e4e50;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .companyName {
            font-family: ${theme.fontFamily.english}, ${theme.fontFamily.japan};
            color: #414b5a;
            font-weight: 500;
            font-style: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
          }

          .accordion .toggle {
            width: 16px;
            height: 16px;
            transition: all 0.35s ease;
            position: relative;
          }

          .accordion .toggle[aria-expanded='true'] {
            transform: rotateZ(180deg);
          }

          .icon_toggle {
            position: absolute;
            top: 50%;
          }

          .accordion-content {
            font-family: ${theme.fontFamily.english}, ${theme.fontFamily.japan};
            font-weight: 200;
            overflow: hidden;
            max-height: 1000px;
            transition: max-height 1s ease-in-out;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .accordion-content[aria-expanded='true'] {
            max-height: 0px;
            transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
          }
        `}
      </style>
    </div>
  );
};

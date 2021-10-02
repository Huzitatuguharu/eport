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
    <div className='accordion'>
      <div className='accordion-title' onClick={toggle}>
        <Image src='/check.svg' alt='Picture of the author' width={20} height={20} />

        <p className='companyName'>{companyName} </p>
        <p className='toggle' aria-expanded={isOpen}>
          開
        </p>
      </div>
      <div className='accordion-content' aria-expanded={!isOpen}>
        {props.children}
      </div>

      <style jsx>
        {`
          .accordion {
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
          .companyName {
            font-family: ${theme.fontFamily.english}, ${theme.fontFamily.japan};
            color: #414b5a;
            font-weight: 500;
            font-style: normal;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            gap: 0.2em;
          }
          .accordion:nth-of-type(1) {
            border-top-width: 1px;
          }

          .accordion-title {
            font-size: 18px;
            color: #3e4e50;
            font-weight: 500;
            display: flex;
          }

          .accordion-title:hover {
            cursor: pointer;
          }

          .accordion .toggle {
            width: 16px;
            height: 16px;
            align-self: center;
            margin-left: auto;
            transition: all 0.35s ease;
          }

          .accordion .toggle[aria-expanded='true'] {
            transform: rotateZ(90deg);
          }

          .accordion-content {
            overflow: hidden;
            max-height: 1000px;
            transition: max-height 1s ease-in-out;
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

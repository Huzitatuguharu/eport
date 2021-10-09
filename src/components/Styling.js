import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
// アイコン
import { IconContext } from 'react-icons';

import useMedia from 'use-media';
import theme from '../../styles/theme';

const AirplaneIcon = (props) => {
  const { direction } = props;
  const isWide = useMedia({ minWidth: '1200px' });

  let icon;
  if (direction == 'from') {
    icon = (
      <div className='airportCard_title'>
        <p className='icon_parent'>
          <svg
            width='40'
            height='30'
            viewBox='0 0 590 428'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_dd)'>
              <path
                d='M503.506 161.386C492.639 155.531 477.959 158.43 444.02 170.782L384.8 192.337C383.108 192.953 381.243 192.893 379.594 192.17L225.592 124.628C221.144 122.356 215.028 121.39 212.016 122.486L170.555 137.775C167.52 138.897 168.745 142.841 173.271 146.531L269.076 223.132C273.342 226.543 272.232 233.308 267.098 235.177L183.226 265.704C181.225 266.432 179.001 266.21 177.184 265.1L91.9934 213.077C88.7346 210.905 83.6031 210.012 80.5922 211.108L49.061 222.584C46.0207 223.691 45.6701 227.41 48.2872 230.897L89.548 290.459C92.1608 294.23 90.4994 299.453 86.188 301.023L76.2616 304.636C60.8327 310.251 68.7531 336.783 86.5661 342.538C104.385 348.308 244.414 353.726 261.347 347.562L477.933 268.732C524.219 251.885 561.073 213.945 551.624 187.986C546.899 175.006 514.368 167.227 503.506 161.386Z'
                fill='url(#paint0_linear)'
              />
            </g>
            <defs>
              <filter
                id='filter0_dd'
                x='0'
                y='0'
                width='589.955'
                height='427.612'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dx='8' dy='8' />
                <feGaussianBlur stdDeviation='6.5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.819608 0 0 0 0 0.862745 0 0 0 0 0.87451 0 0 0 1 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dx='-8' dy='-8' />
                <feGaussianBlur stdDeviation='6.5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
              </filter>
              <linearGradient
                id='paint0_linear'
                x1='60.0544'
                y1='299.311'
                x2='529.901'
                y2='128.301'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#0361F5' />
                <stop offset='0.5' stopColor='#358FF8' />
                <stop offset='1' stopColor='#6FC9FC' />
              </linearGradient>
            </defs>
          </svg>
        </p>
        {/* <p>FROM</p> */}
        <style jsx>{``}</style>
      </div>
    );
  } else {
    icon = (
      <p className='icon_parent'>
        <svg
          width='40'
          height='30'
          viewBox='0 0 590 428'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_dd)'>
            <path
              d='M488.415 307.69C483.854 296.219 470.745 289.004 436.806 276.651L377.586 255.096C375.893 254.48 374.504 253.236 373.705 251.622L299.148 100.891C297.201 96.2921 293.137 91.6203 290.125 90.5241L248.536 75.5861C245.49 74.4945 243.893 78.303 244.989 84.0386L269.141 204.3C270.217 209.656 265.017 214.125 259.884 212.257L176.012 181.73C174.011 181.001 172.45 179.402 171.771 177.383L139.951 82.7722C138.851 79.0133 135.494 75.0309 132.483 73.9351L100.952 62.4586C97.9117 61.3521 95.2524 63.9758 95.0157 68.3294L88.3382 140.478C87.9153 145.046 83.2852 147.98 78.9738 146.411L69.0474 142.798C53.6185 137.182 42.6313 162.598 52.5779 178.456C62.519 194.33 166.305 288.489 183.239 294.652L399.824 373.483C446.11 390.33 498.729 384.955 508.177 358.996C512.901 346.016 492.981 319.146 488.415 307.69Z'
              fill='url(#paint0_linear)'
            />
          </g>
          <defs>
            <filter
              id='filter0_dd'
              x='0'
              y='0'
              width='589.955'
              height='427.612'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='8' dy='8' />
              <feGaussianBlur stdDeviation='6.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.819608 0 0 0 0 0.862745 0 0 0 0 0.87451 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='-8' dy='-8' />
              <feGaussianBlur stdDeviation='6.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
              <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
            </filter>
            <linearGradient
              id='paint0_linear'
              x1='60.0545'
              y1='128.301'
              x2='529.901'
              y2='299.311'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0361F5' />
              <stop offset='0.5' stopColor='#358FF8' />
              <stop offset='1' stopColor='#6FC9FC' />
            </linearGradient>
          </defs>
        </svg>

        {/* <Image src='/arrival.svg' alt='Picture of the author' width={30} height={30} size='fixed' /> */}
        <style jsx>{``}</style>
      </p>
    );
  }

  return <div className='airportCard_left'>{icon}</div>;
};

export default React.memo(AirplaneIcon);

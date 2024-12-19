import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Calendar(props) {
  return (
    <Svg
      width={windowWidth(20)}
      height={windowHeight(20)}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        opacity="0.4"
        d="M1.07275 6.84113H15.1339"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.59521 12.9881H4.60252M11.6038 9.92208H11.6111H11.6038ZM8.10318 9.92208H8.11049H8.10318ZM4.59521 9.92208H4.60252H4.59521ZM11.6038 12.9881H11.6111H11.6038ZM8.10318 12.9881H8.11049H8.10318Z"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2896 1V3.59606"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.91699 1V3.59606"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4435 2.24581H4.76376C2.44704 2.24581 1 3.53638 1 5.90864V13.0478C1 15.4574 2.44704 16.7778 4.76376 16.7778H11.4362C13.7602 16.7778 15.2 15.4797 15.2 13.1075V5.90864C15.2073 3.53638 13.7675 2.24581 11.4435 2.24581Z"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

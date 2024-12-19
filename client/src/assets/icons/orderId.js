import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function OrderId() {
  return (
    <Svg
      width={windowWidth(26)}
      height={windowHeight(26)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2807 2.30158H6.7365C5.02067 2.30158 3.5415 3.69242 3.5415 5.40908V14.3366C3.5415 16.1499 4.924 17.5957 6.7365 17.5957H13.394C15.1107 17.5957 16.5015 16.0541 16.5015 14.3366V6.69825L12.2807 2.30158Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0615 2.29183V4.716C12.0615 5.89933 13.019 6.85933 14.2015 6.86183C15.299 6.86433 16.4215 6.86517 16.4974 6.86017"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9033 12.9648H7.40576"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.2019 8.838H7.40527"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

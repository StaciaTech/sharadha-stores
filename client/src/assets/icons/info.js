import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Info() {
  return (
    <Svg
      width={windowWidth(19)}
      height={windowHeight(19)}
      viewBox="0 0 14 14"
      fill="none">
      <Path
        d="M6.99935 12.8337C10.2077 12.8337 12.8327 10.2087 12.8327 7.00033C12.8327 3.79199 10.2077 1.16699 6.99935 1.16699C3.79102 1.16699 1.16602 3.79199 1.16602 7.00033C1.16602 10.2087 3.79102 12.8337 6.99935 12.8337Z"
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M7 4.66699V7.58366"
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M6.99609 9.33301H7.00133"
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

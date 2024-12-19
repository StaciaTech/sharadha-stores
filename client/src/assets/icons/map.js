import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Map() {
  return (
    <Svg
      width={windowWidth(30)}
      height={windowHeight(30)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z"
        stroke="#777777"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3333 10H15"
        stroke="#777777"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.99984 10H1.6665"
        stroke="#777777"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 5V1.66666"
        stroke="#777777"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 18.3333V15"
        stroke="#777777"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

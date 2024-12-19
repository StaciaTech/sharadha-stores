import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Check({height, width, color}) {
  return (
    <Svg
      width={width || windowWidth(24)}
      height={height || windowHeight(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

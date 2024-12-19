import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Select() {
  return (
    <Svg
      width={windowWidth(16)}
      height={windowHeight(16)}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 3.33333L3.5 8L11 1" stroke="white" strokeWidth="2" />
    </Svg>
  );
}

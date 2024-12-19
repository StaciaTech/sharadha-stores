import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function DrawerArrow(props) {
  return (
    <Svg
      width={windowWidth(12)}
      height={windowHeight(12)}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.45847 1.625L5.5418 6L1.45847 10.375"
        stroke={props.fill || 'black'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

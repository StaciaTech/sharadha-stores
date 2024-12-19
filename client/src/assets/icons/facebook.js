import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';

export function Facebook({color}) {
  const {isDark} = useValues();

  return (
    <Svg
      width={windowWidth(20)}
      height={windowHeight(20)}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.5 0.5H6.25C5.25544 0.5 4.30161 0.895088 3.59835 1.59835C2.89509 2.30161 2.5 3.25544 2.5 4.25V6.5H0.25V9.5H2.5V15.5H5.5V9.5H7.75L8.5 6.5H5.5V4.25C5.5 4.05109 5.57902 3.86032 5.71967 3.71967C5.86032 3.57902 6.05109 3.5 6.25 3.5H8.5V0.5Z"
        fill={color && isDark ? '#dddddd' : '#4a5568' || '#0BAF9A'}
      />
    </Svg>
  );
}

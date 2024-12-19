import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';
import appColors from '@theme/appColors';

export function Return() {
  const {isDark} = useValues();

  return (
    <Svg
      width={windowWidth(26)}
      height={windowHeight(26)}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.7623 23.4762C20.4098 22.252 23.8332 18.027 23.8332 13.0003C23.8332 7.02033 19.0232 2.16699 12.9998 2.16699C5.774 2.16699 2.1665 8.19033 2.1665 8.19033M2.1665 8.19033V3.25033M2.1665 8.19033H4.344H6.9765"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.1665 13C2.1665 18.98 7.01984 23.8333 12.9998 23.8333"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 3"
      />
    </Svg>
  );
}

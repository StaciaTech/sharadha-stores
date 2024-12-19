import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';

export function Search({color, width, height}) {
  const {colors} = useTheme();
  return (
    <Svg
      width={width || windowWidth(26)}
      height={height || windowHeight(26)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.82495 15.5664C12.5481 15.5664 15.5664 12.5481 15.5664 8.82494C15.5664 5.10176 12.5481 2.08353 8.82495 2.08353C5.10176 2.08353 2.08353 5.10176 2.08353 8.82494C2.08353 12.5481 5.10176 15.5664 8.82495 15.5664Z"
        stroke={color ? appColors.white : appColors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5137 13.8639L16.1568 16.5"
        stroke={color ? appColors.white : colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

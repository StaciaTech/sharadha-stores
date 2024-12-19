import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Cancel({height, width}) {
  const {colors} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="cancel"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      height={height || windowHeight(20)}
      width={width || windowWidth(20)}>
      <Path
        fill="none"
        stroke={colors.text}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M9.197 19.803L19.803 9.197M9.197 9.197l10.606 10.606"
      />
    </Svg>
  );
}

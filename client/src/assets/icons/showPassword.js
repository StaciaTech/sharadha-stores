import Svg, {Path, Circle} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function ShowPassword() {
  const {colors} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth(23.3)}
      height={windowHeight(23.3)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-eye">
      <Path
        stroke={colors.text}
        d="M1 12s4-9 11-9 11 9 11 9-4 9-11 9-11-9-11-9z"
      />
      <Circle cx="12" cy="12" r="3.5" stroke="#0BAF9A" />
    </Svg>
  );
}

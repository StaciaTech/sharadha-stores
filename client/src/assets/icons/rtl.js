import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Rtl() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(30)}
      height={windowHeight(30)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 17.5H4"
        stroke={colors.text}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1183 16.1193 15 17.5 15C18.8807 15 20 16.1183 20 17.5Z"
        stroke="#0BAF9A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 6.5H20"
        stroke={colors.text}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.5C4 7.88174 5.11928 9 6.5 9C7.88072 9 9 7.88174 9 6.5C9 5.11928 7.88072 4 6.5 4C5.11928 4 4 5.11928 4 6.5Z"
        stroke="#0BAF9A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

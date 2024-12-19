import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Order() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(24)}
      height={windowHeight(24)}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.7517 13.1955H5.43417"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3175 9.65471H5"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.4107 6H5.00008"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.92 1.40608C11.92 1.40608 5.20264 1.40958 5.19214 1.40958C2.77714 1.42446 1.28177 3.01346 1.28177 5.43721V13.4837C1.28177 15.9197 2.78852 17.5148 5.22452 17.5148C5.22452 17.5148 11.941 17.5122 11.9524 17.5122C14.3674 17.4973 15.8636 15.9075 15.8636 13.4837V5.43721C15.8636 3.00121 14.356 1.40608 11.92 1.40608Z"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

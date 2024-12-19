import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';

export function Password({style}) {
  const {colors} = useTheme();
  return (
    <Svg
      style={style}
      width={windowWidth(28)}
      height={windowHeight(28)}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.6863 8.26682V6.38819C13.6863 4.18932 11.9879 2.40603 9.89378 2.40603C7.79962 2.39644 6.09462 4.17094 6.08545 6.37069V6.38819V8.26682"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0695 18.5934H6.70199C4.95699 18.5934 3.54199 17.1085 3.54199 15.2754V11.5225C3.54199 9.68939 4.95699 8.20451 6.70199 8.20451H13.0695C14.8145 8.20451 16.2295 9.68939 16.2295 11.5225V15.2754C16.2295 17.1085 14.8145 18.5934 13.0695 18.5934Z"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88574 12.4274V14.3707"
        stroke={appColors.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

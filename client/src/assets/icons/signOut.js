import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function SignOut() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(26)}
      height={windowHeight(26)}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.9438 5.25564V4.39585C12.9438 2.52053 11.367 1 9.42221 1H4.76334C2.81952 1 1.24268 2.52053 1.24268 4.39585V14.6525C1.24268 16.5278 2.81952 18.0484 4.76334 18.0484H9.43176C11.3708 18.0484 12.9438 16.5324 12.9438 14.6627V13.7937"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.4364 9.52409H7.9292"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6377 6.83772L19.4359 9.52399L16.6377 12.2112"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

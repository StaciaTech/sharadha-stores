import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Notification() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(24)}
      height={windowHeight(24)}
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 14.1294C11.9644 14.1294 14.0297 13.5567 14.2292 11.2579C14.2292 8.96071 12.7892 9.10844 12.7892 6.28988C12.7892 4.08828 10.7025 1.58333 7.5 1.58333C4.29752 1.58333 2.21075 4.08828 2.21075 6.28988C2.21075 9.10844 0.770828 8.96071 0.770828 11.2579C0.971082 13.5654 3.0364 14.1294 7.5 14.1294Z"
        stroke={colors.text}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.39113 16.512C8.31119 17.7111 6.62651 17.7253 5.53624 16.512"
        stroke="#0BAF9A"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

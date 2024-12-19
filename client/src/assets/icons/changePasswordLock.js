import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function ChangePasswordLock() {
  return (
    <Svg
      width={windowWidth(20)}
      height={windowHeight(20)}
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.6848 7.26708V5.38845C11.6848 3.18958 9.98648 1.40629 7.89232 1.40629C5.79815 1.3967 4.09315 3.1712 4.08398 5.37095V5.38845V7.26708"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0685 17.594H4.70102C2.95602 17.594 1.54102 16.1091 1.54102 14.276V10.5231C1.54102 8.68995 2.95602 7.20508 4.70102 7.20508H11.0685C12.8135 7.20508 14.2285 8.68995 14.2285 10.5231V14.276C14.2285 16.1091 12.8135 17.594 11.0685 17.594Z"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.88477 11.4277V13.3711"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

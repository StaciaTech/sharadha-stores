import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Delete() {
  return (
    <Svg
      width={windowWidth(30)}
      height={windowHeight(30)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.89584 7.89017C3.89584 7.89017 4.34834 13.5027 4.61084 15.8668C4.73584 16.996 5.43334 17.6577 6.57584 17.6785C8.75001 17.7177 10.9267 17.7202 13.1 17.6743C14.1992 17.6518 14.885 16.9818 15.0075 15.8727C15.2717 13.4877 15.7217 7.89017 15.7217 7.89017"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.74309 5.19975H16.8748"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.46602 5.19975C6.12019 5.19975 6.68352 4.73725 6.81186 4.09642L7.01436 3.08308C7.13936 2.61558 7.56269 2.29225 8.04519 2.29225H11.5727C12.0552 2.29225 12.4785 2.61558 12.6035 3.08308L12.806 4.09642C12.9344 4.73725 13.4977 5.19975 14.1519 5.19975"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

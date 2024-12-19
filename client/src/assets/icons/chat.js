import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Chat() {
  return (
    <Svg
      width={windowWidth(25)}
      height={windowHeight(25)}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5087 12.7132C11.3439 14.7509 8.13843 15.1911 5.51522 14.0493C5.12796 13.9026 4.81047 13.784 4.50864 13.784C3.66793 13.7887 2.6215 14.5559 2.07763 14.0447C1.53377 13.5327 2.34957 12.5471 2.34957 11.751C2.34957 11.4669 2.22855 11.1734 2.07265 10.8083C0.858926 8.33974 1.32733 5.32179 3.4921 3.2848C6.25555 0.68295 10.7453 0.68295 13.5087 3.28413C16.2771 5.89 16.2722 10.1121 13.5087 12.7132Z"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.29 8.27533H11.2972"
        stroke="#0BAF9A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.45068 8.27533H8.45781"
        stroke="#0BAF9A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.61084 8.27533H5.61796"
        stroke="#0BAF9A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

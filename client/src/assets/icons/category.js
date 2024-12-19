import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Category({color}) {
  return (
    <Svg
      width={windowWidth(28)}
      height={windowHeight(28)}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.875 6.22917C2.875 3.71334 2.90194 2.875 6.22917 2.875C9.5564 2.875 9.58333 3.71334 9.58333 6.22917C9.58333 8.74499 9.59395 9.58333 6.22917 9.58333C2.86439 9.58333 2.875 8.74499 2.875 6.22917Z"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.417 6.22917C13.417 3.71334 13.4439 2.875 16.7712 2.875C20.0984 2.875 20.1253 3.71334 20.1253 6.22917C20.1253 8.74499 20.1359 9.58333 16.7712 9.58333C13.4064 9.58333 13.417 8.74499 13.417 6.22917Z"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.875 16.7712C2.875 14.2553 2.90194 13.417 6.22917 13.417C9.5564 13.417 9.58333 14.2553 9.58333 16.7712C9.58333 19.287 9.59395 20.1253 6.22917 20.1253C2.86439 20.1253 2.875 19.287 2.875 16.7712Z"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.417 16.7712C13.417 14.2553 13.4439 13.417 16.7712 13.417C20.0984 13.417 20.1253 14.2553 20.1253 16.7712C20.1253 19.287 20.1359 20.1253 16.7712 20.1253C13.4064 20.1253 13.417 19.287 13.417 16.7712Z"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

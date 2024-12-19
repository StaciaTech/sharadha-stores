import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function FilledWishlist() {
  return (
    <Svg
      width={windowWidth(24)}
      height={windowHeight(24)}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.24855 6.79973C0.531372 4.56064 1.36953 2.00139 3.72024 1.24411C4.95675 0.845082 6.3216 1.08035 7.34957 1.85368C8.32207 1.10174 9.73704 0.847755 10.9722 1.24411C13.3229 2.00139 14.1664 4.56064 13.4499 6.79973C12.3337 10.3489 7.34957 13.0826 7.34957 13.0826C7.34957 13.0826 2.40218 10.3903 1.24855 6.79973Z"
        fill="#0BAF9A"
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0232 3.52588C10.7384 3.75714 11.2437 4.39545 11.3045 5.14471Z"
        fill="#0BAF9A"
      />
      <Path
        d="M10.0232 3.52588C10.7384 3.75714 11.2437 4.39545 11.3045 5.14471"
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

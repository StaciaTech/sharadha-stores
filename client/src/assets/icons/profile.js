import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
export function Profile({color}) {
  return (
    <Svg
      width={windowWidth(21)}
      height={windowHeight(21)}
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.48666 12.4279C4.10249 12.4279 1.21249 12.9396 1.21249 14.9888C1.21249 17.0379 4.08416 17.5679 7.48666 17.5679C10.8708 17.5679 13.76 17.0554 13.76 15.0071C13.76 12.9588 10.8892 12.4279 7.48666 12.4279Z"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.48666 9.50517C9.7075 9.50517 11.5075 7.70433 11.5075 5.4835C11.5075 3.26267 9.7075 1.46267 7.48666 1.46267C5.26583 1.46267 3.46497 3.26267 3.46497 5.4835C3.4575 7.69683 5.24583 9.49767 7.45833 9.50517H7.48666Z"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

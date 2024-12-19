import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Call(props) {
  return (
    <Svg
      width={windowWidth(26)}
      height={windowHeight(26)}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.64881 9.87398C11.6406 13.0311 12.3193 9.37866 14.2242 11.388C16.0607 13.3259 17.1162 13.7142 14.7894 16.1696C14.498 16.4168 12.6462 19.3913 6.13845 12.5239C-0.370109 5.65567 2.44619 3.69902 2.68048 3.39147C5.0129 0.9293 5.3744 2.04993 7.21087 3.98789C9.11577 5.99806 5.65699 6.71683 8.64881 9.87398Z"
        stroke={props.color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.7646 4.78404C12.0929 5.05638 13.1309 6.15283 13.3896 7.55488"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

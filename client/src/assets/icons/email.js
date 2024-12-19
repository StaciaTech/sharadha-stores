import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';

export function Email({color}) {
  const {isDark} = useValues();

  return (
    <Svg
      width={windowWidth(28)}
      height={windowHeight(28)}
      viewBox="0 -2.5 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <G
          id="Dribbble-Light-Preview"
          transform="translate(-340.000000, -922.000000)"
          fill={color && isDark ? '#dddddd' : '#4a5568' || '#000000'}>
          <G id="icons" transform="translate(56.000000, 160.000000)">
            <Path
              d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
              id="email-[#1572]"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

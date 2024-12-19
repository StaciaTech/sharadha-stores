import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';

export function Twitter({color}) {
  const {isDark} = useValues();

  return (
    <Svg
      width={windowWidth(30)}
      height={windowHeight(30)}
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.2916 0.125043C15.6133 0.603506 14.8623 0.969454 14.0675 1.20879C13.6409 0.718279 13.0739 0.370616 12.4433 0.212824C11.8127 0.0550313 11.1488 0.0947229 10.5415 0.326531C9.93412 0.558338 9.41263 0.971077 9.04751 1.50893C8.68239 2.04677 8.49127 2.68378 8.49998 3.33379V4.04213C7.25518 4.0744 6.02172 3.79833 4.90944 3.23848C3.79717 2.67864 2.84062 1.85241 2.12498 0.833376C2.12498 0.833376 -0.708354 7.20838 5.66665 10.0417C4.20785 11.0319 2.47005 11.5285 0.708313 11.4584C7.08331 15 14.875 11.4584 14.875 3.31254C14.8743 3.11524 14.8554 2.91842 14.8183 2.72463C15.5412 2.01168 16.0514 1.11155 16.2916 0.125043Z"
        fill={color && isDark ? '#dddddd' : '#4a5568' || '#0BAF9A'}
      />
    </Svg>
  );
}

import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Home({color}) {
  return (
    <Svg
      width={windowWidth(25)}
      height={windowHeight(25)}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.65722 19.9003V16.8125C7.6572 16.0271 8.29312 15.3889 9.08101 15.3837H11.9671C12.7587 15.3837 13.4005 16.0234 13.4005 16.8125V19.9099C13.4003 20.5767 13.9343 21.1217 14.603 21.1373H16.5271C18.4451 21.1373 20 19.5874 20 17.6755V8.89164C19.9898 8.13951 19.6355 7.43321 19.038 6.97376L12.4577 1.69001C11.3049 0.769998 9.6662 0.769998 8.51342 1.69001L1.96203 6.98335C1.36226 7.44094 1.00739 8.14841 1 8.90123V17.6755C1 19.5874 2.55488 21.1373 4.47291 21.1373H6.39696C7.08235 21.1373 7.63797 20.5835 7.63797 19.9003"
        stroke={color || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

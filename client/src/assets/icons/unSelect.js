import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function UnSelect({width, height}) {
  return (
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || windowWidth(24)}
      height={height || windowHeight(24)}
      viewBox="0 0 24 24">
      <Path
        id="Oval-Copy"
        fill="#0BAF9A"
        d="M12,22.002c5.523,0,10.002-4.478,10.002-10.001S17.523,1.999,12,1.999
			C6.476,1.999,1.999,6.477,1.999,12S6.476,22.002,12,22.002z M12,20.502c-4.695,0-8.501-3.807-8.501-8.501
			c0-4.695,3.806-8.501,8.501-8.501S20.502,7.305,20.502,12C20.502,16.695,16.695,20.502,12,20.502z"
      />
    </Svg>
  );
}

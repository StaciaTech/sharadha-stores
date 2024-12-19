import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function Selected({width, height}) {
  return (
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || windowWidth(24)}
      height={height || windowHeight(24)}
      viewBox="0 0 24 24">
      <Path
        id="_xD83C__xDFA8_-Color"
        fill="#0BAF9A"
        d="M12,1.999c5.523,0,10.002,4.478,10.002,10.001S17.523,22.002,12,22.002
			C6.476,22.002,1.999,17.524,1.999,12S6.476,1.999,12,1.999z M12,3.499c-4.695,0-8.501,3.806-8.501,8.501
			c0,4.695,3.806,8.501,8.501,8.501s8.502-3.807,8.502-8.501C20.502,7.305,16.695,3.499,12,3.499z M11.997,5.999
			c3.312,0,5.998,2.686,5.998,5.998s-2.686,5.998-5.998,5.998c-3.313,0-5.998-2.686-5.998-5.998S8.684,5.999,11.997,5.999z"
      />
    </Svg>
  );
}

import Svg, {Path, G} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Dark() {
  const {colors} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={windowWidth(30)}
      height={windowHeight(30)}>
      <G data-name="Chart Pie" fill="#000000" class="color000 svgShape">
        <Path
          fill={colors.text}
          strokeWidth="4"
          d="M29,58.5a23.5,23.5,0,0,1,0-47A1.5,1.5,0,0,1,30.5,13V33.5H51A1.5,1.5,0,0,1,52.5,35,23.527,23.527,0,0,1,29,58.5ZM27.5,14.555A20.5,20.5,0,1,0,49.445,36.5H29A1.5,1.5,0,0,1,27.5,35Z"
          class="color222 svgShape"
        />
        <Path
          fill="#0BAF9A"
          strokeWidth="4"
          d="M57,30.5H35A1.5,1.5,0,0,1,33.5,29V7A1.5,1.5,0,0,1,35,5.5,23.527,23.527,0,0,1,58.5,29,1.5,1.5,0,0,1,57,30.5Zm-20.5-3H55.445A20.53,20.53,0,0,0,36.5,8.555Z"
          class="color222 svgShape"
        />
      </G>
    </Svg>
  );
}

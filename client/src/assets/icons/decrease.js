import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Decrease(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={props.width || windowWidth(20)}
      height={props.height || windowHeight(20)}
      viewBox="0 0 9 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.08594 1.32715H0.0351562V0H8.08594V1.32715Z"
        fill={props.color || colors.text}
      />
    </Svg>
  );
}

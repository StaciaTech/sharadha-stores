import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function Increase(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={props.width || windowWidth(20)}
      height={props.height || windowHeight(20)}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.45703 4.13574V5.66504H0.685547V4.13574H9.45703ZM5.88867 0.400391V9.7168H4.2627V0.400391H5.88867Z"
        fill={props.color || colors.text}
      />
    </Svg>
  );
}

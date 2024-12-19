import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';

export function Location(props) {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(24)}
      height={windowHeight(24)}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5.78267C1.0096 3.1323 3.30917 0.991052 6.13623 1.00003C8.96329 1.00906 11.2473 3.16491 11.2377 5.81527V5.86962C11.2029 7.59245 10.1768 9.18484 8.91884 10.4294C8.19941 11.1298 7.396 11.7499 6.52464 12.2772C6.29164 12.4662 5.94604 12.4662 5.71304 12.2772C4.41404 11.4846 3.27396 10.4838 2.34493 9.32071C1.5169 8.30647 1.04678 7.07544 1 5.79897V5.78267Z"
        stroke={props.color ? appColors.white : colors.text}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.11884 7.41309C7.0249 7.41309 7.75942 6.72449 7.75942 5.87505C7.75942 5.02561 7.0249 4.33701 6.11884 4.33701C5.21277 4.33701 4.47826 5.02561 4.47826 5.87505C4.47826 6.72449 5.21277 7.41309 6.11884 7.41309Z"
        stroke={props.color ? appColors.white : appColors.primary}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

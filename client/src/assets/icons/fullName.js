import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function FullName() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(22)}
      height={windowHeight(22)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M8.98857 11.5095C6.08786 11.5095 3.61072 11.9481 3.61072 13.7045C3.61072 15.4609 6.07215 15.9152 8.98857 15.9152C11.8893 15.9152 14.3657 15.4759 14.3657 13.7202C14.3657 11.9645 11.905 11.5095 8.98857 11.5095Z"
        stroke="#0BAF9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M8.98856 9.00441C10.8921 9.00441 12.435 7.46084 12.435 5.55727C12.435 3.6537 10.8921 2.11084 8.98856 2.11084C7.08499 2.11084 5.5414 3.6537 5.5414 5.55727C5.53499 7.45441 7.06785 8.99798 8.96428 9.00441H8.98856Z"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

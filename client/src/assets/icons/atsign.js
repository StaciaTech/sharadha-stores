import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTheme} from '@react-navigation/native';

export function AtSign() {
  const {colors} = useTheme();
  return (
    <Svg
      width={windowWidth(22)}
      height={windowHeight(22)}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.50002 11.3334C10.0648 11.3334 11.3334 10.0649 11.3334 8.50008C11.3334 6.93527 10.0648 5.66675 8.50002 5.66675C6.93521 5.66675 5.66669 6.93527 5.66669 8.50008C5.66669 10.0649 6.93521 11.3334 8.50002 11.3334Z"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3334 5.66655V9.20822C11.3334 9.7718 11.5572 10.3123 11.9558 10.7108C12.3543 11.1093 12.8948 11.3332 13.4584 11.3332C14.0219 11.3332 14.5624 11.1093 14.961 10.7108C15.3595 10.3123 15.5834 9.7718 15.5834 9.20822V8.49988C15.5833 6.9012 15.0424 5.34956 14.0486 4.09726C13.0548 2.84497 11.6667 1.96567 10.1098 1.60235C8.55296 1.23902 6.91898 1.41304 5.47357 2.0961C4.02815 2.77917 2.85631 3.9311 2.14858 5.36461C1.44086 6.79811 1.23888 8.42887 1.57548 9.99172C1.91208 11.5546 2.76747 12.9576 4.00256 13.9727C5.23764 14.9877 6.77979 15.5551 8.37824 15.5826C9.97669 15.6101 11.5374 15.0961 12.8067 14.1241"
        stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

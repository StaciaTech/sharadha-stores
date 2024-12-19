import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

export function RefundHistory({ style }) {
  const { colors } = useTheme();
  return (
    <Svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 26 24">
      <Circle cx={12} cy={12} r={10} stroke={colors.text} strokeWidth={1.5} />
      <Path
        stroke="#0BAF9A"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 6v12M15 9.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5 3 1.12 3 2.5-1.343 2.5-3 2.5-3-1.12-3-2.5"
      />
    </Svg>
  );
}

import React from "react";
import Svg, { Path } from "react-native-svg";
import { windowWidth, windowHeight } from "@theme/appConstant";
import { useTheme } from "@react-navigation/native";

export function HeaderArrow({ height, width }) {
  const { colors } = useTheme();
  return (
    <Svg
      width={width || windowWidth(40)}
      height={height || windowHeight(40)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 5.66591L0.75 14.3349C0.75 17.3549 2.889 19.2499 5.916 19.2499L14.084 19.2499C17.111 19.2499 19.25 17.3649 19.25 14.3349L19.25 5.66591C19.25 2.63591 17.111 0.749908 14.084 0.749908L5.916 0.749908C2.889 0.749908 0.75 2.63591 0.75 5.66591Z"
        // stroke={colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.91406 9.99991L14.0861 9.99991"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.67773 13.7479L5.91373 9.99992L9.67773 6.25192"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

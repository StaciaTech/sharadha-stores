import React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = ({ width = 18, height = 18, color = "#17349D" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2.252 7.881a5.63 5.63 0 1 1 11.258 0 5.63 5.63 0 0 1-11.258 0ZM7.88 0a7.881 7.881 0 1 0 4.729 14.186c.032.043.067.083.104.12l3.378 3.378a1.126 1.126 0 0 0 1.592-1.592l-3.378-3.378a1.131 1.131 0 0 0-.12-.104A7.881 7.881 0 0 0 7.88 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SearchIcon;
import React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = ({ width = 33, height = 33, color = "#7485C4" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 33 33"
    fill="none"
  >
    <Path
      fill={color}
      d="M16.25 32.5c8.974 0 16.25-7.275 16.25-16.25S25.224 0 16.25 0C7.275 0 0 7.275 0 16.25S7.275 32.5 16.25 32.5Z"
      opacity={0.4}
    />
    <Path
      fill="#fff"
      d="M16.25 8.01a6.096 6.096 0 0 0-6.094 6.094c0 3.3 2.584 5.98 6.013 6.078H16.46a6.083 6.083 0 0 0 5.883-6.078 6.096 6.096 0 0 0-6.094-6.093ZM27.269 28.194A16.21 16.21 0 0 1 16.25 32.5a16.21 16.21 0 0 1-11.017-4.306c.39-1.479 1.446-2.828 2.99-3.867 4.436-2.958 11.65-2.958 16.055 0 1.56 1.04 2.6 2.388 2.99 3.867Z"
    />
  </Svg>
);

export default ProfileIcon;

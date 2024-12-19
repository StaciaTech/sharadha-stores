import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ width = 27, height = 25, color = "#93A3DD" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 27 25"
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M1.017 7.344c-.699 1.409-.453 3.057.037 6.353l.36 2.422c.63 4.234.944 6.352 2.462 7.616C5.394 25 7.62 25 12.07 25h2.858c4.452 0 6.677 0 8.195-1.265 1.518-1.264 1.833-3.382 2.462-7.616l.36-2.422c.49-3.296.736-4.944.037-6.353-.698-1.41-2.184-2.266-5.155-3.98l-1.789-1.03C16.34.778 14.991 0 13.5 0c-1.49 0-2.84.778-5.539 2.334l-1.789 1.03c-2.971 1.714-4.457 2.57-5.155 3.98ZM8.657 20c0-.518.433-.938.968-.938h7.75c.535 0 .969.42.969.938 0 .517-.434.937-.969.937h-7.75c-.535 0-.969-.42-.969-.937Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default HomeIcon;

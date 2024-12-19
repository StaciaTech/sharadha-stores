import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export function Video() {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="3"
        y="3"
        width="506"
        height="506"
        stroke="#0BAF9A"
        strokeWidth="100"
      />
      <Path
        d="M404.717 255.012L181.82 385.135L180.578 127.039L404.717 255.012Z"
        fill="#0BAF9A"
      />
    </Svg>
  );
}

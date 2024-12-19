import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const CartFillSvg = ({ width = 22, height = 22, color = "#17349D" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
  >
    <G fill={color} clipPath="url(#clip0)">
      <Path d="M4.27 1.156H1.744c-.464 0-.841.392-.841.875v.438c0 .483.377.875.841.875h1.693L5.73 13.39c.376 1.646 1.77 2.817 3.39 2.859v.001H15.7c1.64 0 3.04-1.229 3.317-2.91l1.056-6.42c.176-1.069-.615-2.045-1.658-2.045H5.949l-.656-2.878a1.061 1.061 0 0 0-1.024-.84ZM9.317 18.875c0 .966-.753 1.75-1.682 1.75-.93 0-1.683-.784-1.683-1.75s.753-1.75 1.683-1.75c.929 0 1.682.784 1.682 1.75ZM18.572 18.875c0 .966-.753 1.75-1.683 1.75-.929 0-1.682-.784-1.682-1.75s.753-1.75 1.682-1.75c.93 0 1.683.784 1.683 1.75Z" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill="#fff" d="M.904.5h20.192v21H.904z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CartFillSvg;







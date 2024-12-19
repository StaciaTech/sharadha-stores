import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from "react-native-svg";

const MoneyIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={39} height={29} fill="none">
    <G filter="url(#a)">
      <Path
        fill="#06B61A"
        fillRule="evenodd"
        d="M7 20.833a3 3 0 0 1-3-3V3.167a3 3 0 0 1 3-3h25a3 3 0 0 1 3 3v14.666a3 3 0 0 1-3 3H7ZM6.067 3.97c0 1.185 1.18 2.002 2.094 1.248.324-.268.623-.566.89-.89.754-.915-.063-2.095-1.248-2.095-.959 0-1.736.778-1.736 1.737Zm26.866 0c0 1.185-1.18 2.002-2.094 1.248a6.582 6.582 0 0 1-.89-.89c-.754-.915.063-2.095 1.247-2.095.96 0 1.737.778 1.737 1.737Zm-1.736 14.797c-1.185 0-2.002-1.18-1.248-2.095.267-.324.566-.623.89-.89.914-.754 2.094.063 2.094 1.248 0 .959-.777 1.736-1.736 1.736ZM6.067 17.03c0-1.185 1.18-2.002 2.094-1.248.324.267.623.566.89.89.754.914-.063 2.095-1.248 2.095-.959 0-1.736-.778-1.736-1.737Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#fff"
      d="M15 6.233h3.637l.69.863c.13.161.237.335.323.515H15v2.067h4.74a2.65 2.65 0 0 1-2.483 1.722h-2.251l5.03 6.554 1.639-1.258-2.72-3.546a4.713 4.713 0 0 0 2.927-3.472h2.074V7.61h-2.122a4.667 4.667 0 0 0-.588-1.378h2.71V4.167H15v2.066Z"
    />
    <Defs>
      <Filter
        id="a"
        width={39}
        height={28.666}
        x={0}
        y={0.167}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <FeOffset dy={4} />
        <FeGaussianBlur stdDeviation={2} />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix values="0 0 0 0 0.0231818 0 0 0 0 0.713281 0 0 0 0 0.103693 0 0 0 0.22 0" />
        <FeBlend in2="BackgroundImageFix" result="effect1_dropShadow_357_327" />
        <FeBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_357_327"
          result="shape"
        />
      </Filter>
    </Defs>
  </Svg>
);

export default MoneyIcon;

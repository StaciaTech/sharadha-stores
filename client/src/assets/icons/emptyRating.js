import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {windowWidth, windowHeight} from '@theme/appConstant';

export function EmptyRating({width, height}) {
  return (
    <Svg
      width={width || windowWidth(20)}
      height={height || windowHeight(20)}
      style="enable-background:new 0 0 50 50;"
      version="1.1"
      viewBox="0 0 50 50">
      <G id="Layer_1">
        <Path
          fill={'#ffb321'}
          d="M31.208,18.302L25,1.046l-6.208,17.256L1.414,19.171l13.571,11.441l-4.607,17.736L25,38.259l14.622,10.09l-4.607-17.736   l13.571-11.441L31.208,18.302z M36.335,43.651L25,35.829l-11.335,7.822l3.573-13.756l-10.652-8.98l13.636-0.682L25,6.954   l4.778,13.279l13.636,0.682l-10.652,8.98L36.335,43.651z"
        />
      </G>
      <G />
    </Svg>
  );
}

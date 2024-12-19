import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function HidePassword(props) {
  const {colors} = useTheme();
  return (
    <View style={props.style}>
      <Svg
        width={windowWidth(26)}
        height={windowHeight(26)}
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M7.7271 11.9722C7.2719 11.4938 6.99481 10.8438 6.99481 10.1147C6.99481 8.65382 8.11265 7.47632 9.49965 7.47632C10.186 7.47632 10.8178 7.76882 11.2651 8.24715"
          stroke="#0BAF9A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.958 10.5823C11.7743 11.6573 10.97 12.5056 9.94952 12.7006"
          stroke="#0BAF9A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.26822 14.5602C4.01184 13.5219 2.94784 12.0052 2.17676 10.1144C2.95576 8.21523 4.02688 6.69023 5.29117 5.64356C6.54755 4.5969 7.99709 4.02856 9.49968 4.02856C11.011 4.02856 12.4597 4.60523 13.724 5.6594"
          stroke={colors.text}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.396 7.49219C15.9407 8.25385 16.4196 9.13302 16.8226 10.1139C15.2654 13.9114 12.5136 16.1989 9.49968 16.1989C8.81647 16.1989 8.14276 16.0822 7.49518 15.8547"
          stroke={colors.text}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.7439 3.54126L3.2561 16.6863"
          stroke={colors.text}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

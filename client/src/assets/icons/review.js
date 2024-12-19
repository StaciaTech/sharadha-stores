import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';

export function Review() {
    return (
        <Svg width={windowWidth(12)}
            height={windowHeight(12)} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.4751 1.03996L4.7351 4.29996C5.1201 4.68496 5.1201 5.31496 4.7351 5.69996L1.4751 8.95996" stroke="#0BAF9A" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
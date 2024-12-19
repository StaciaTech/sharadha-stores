import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { windowWidth, windowHeight } from '@theme/appConstant';

export function SearchArrow({ }) {
    return (
        <Svg width={windowWidth(26)}
            height={windowHeight(26)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}
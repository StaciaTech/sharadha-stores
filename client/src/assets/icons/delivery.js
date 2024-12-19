import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';
import appColors from '@theme/appColors';

export function Delivery() {
  const {isDark} = useValues();

  return (
    <Svg
      width={windowWidth(26)}
      height={windowHeight(26)}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.0001 15.167H14.0834C15.2751 15.167 16.2501 14.192 16.2501 13.0003V2.16699H6.50006C4.87506 2.16699 3.4559 3.06615 2.71924 4.38781"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.1665 18.417C2.1665 20.2153 3.61817 21.667 5.4165 21.667H6.49984C6.49984 20.4753 7.47484 19.5003 8.6665 19.5003C9.85817 19.5003 10.8332 20.4753 10.8332 21.667H15.1665C15.1665 20.4753 16.1415 19.5003 17.3332 19.5003C18.5248 19.5003 19.4998 20.4753 19.4998 21.667H20.5832C22.3815 21.667 23.8332 20.2153 23.8332 18.417V15.167H20.5832C19.9873 15.167 19.4998 14.6795 19.4998 14.0837V10.8337C19.4998 10.2378 19.9873 9.75033 20.5832 9.75033H21.9806L20.1282 6.51117C19.7382 5.8395 19.0232 5.41699 18.2432 5.41699H16.2498V13.0003C16.2498 14.192 15.2748 15.167 14.0832 15.167H12.9998"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.66667 23.8333C9.86328 23.8333 10.8333 22.8633 10.8333 21.6667C10.8333 20.47 9.86328 19.5 8.66667 19.5C7.47005 19.5 6.5 20.47 6.5 21.6667C6.5 22.8633 7.47005 23.8333 8.66667 23.8333Z"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.3332 23.8333C18.5298 23.8333 19.4998 22.8633 19.4998 21.6667C19.4998 20.47 18.5298 19.5 17.3332 19.5C16.1366 19.5 15.1665 20.47 15.1665 21.6667C15.1665 22.8633 16.1366 23.8333 17.3332 23.8333Z"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.8333 13V15.1667H20.5833C19.9875 15.1667 19.5 14.6792 19.5 14.0833V10.8333C19.5 10.2375 19.9875 9.75 20.5833 9.75H21.9808L23.8333 13Z"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.1665 8.66699H8.6665"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.1665 11.917H6.49984"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.1665 15.167H4.33317"
        stroke={isDark ? appColors.white : appColors.title}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

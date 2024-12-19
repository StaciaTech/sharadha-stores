import React from 'react';
import Skeleton from 'react-native-skeleton-placeholder';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';

export function Loader(props) {
  const {isDark} = useValues();

  return (
    <Skeleton
      backgroundColor={isDark ? appColors.loader : appColors.loaderBackground}
      highlightColor={
        isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight
      }>
      {props.view}
    </Skeleton>
  );
}

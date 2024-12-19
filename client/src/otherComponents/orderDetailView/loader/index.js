import React from 'react';
import { View } from 'react-native';
import { Loader } from '@commonComponents';
import { windowHeight } from '@theme/appConstant';
import appColors from '@theme/appColors';
import styles from './styles';

export default orderDetailLoader = props => {
  return (
    <View
      style={[
        styles.orderLoader,
        {
          flexDirection: props.viewAlign,
          backgroundColor: props.isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}>
      <Loader view={<View style={styles.img} />} />
      <View style={styles.detailView}>
        <Loader view={<View style={styles.title} />} />
        <Loader view={<View style={styles.title} />} />
      </View>
    </View>
  );
};

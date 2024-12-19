import React from 'react';
import {View} from 'react-native';
import appColors from '@theme/appColors';
import {Loader} from '@commonComponents';
import styles from './styles';

const address = [{}, {}, {}, {}];

export default addressViewLoader = props => {
  return address.map((item, key) => (
    <View
      key={key}
      style={[
        styles.mainView,
        {
          backgroundColor: props.isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}>
      <View
        style={[
          styles.details,
          {
            flexDirection: props.viewAlign,
          },
        ]}>
        <Loader view={<View style={styles.nameLoader} />} />
        <View style={styles.option}>
          <Loader view={<View style={styles.optionLoader} />} />
          <View style={styles.separator} />
          <Loader view={<View style={styles.optionLoader} />} />
        </View>
      </View>
      <Loader view={<View style={styles.addressLoader} />} />
      <Loader view={<View style={styles.addressLoader} />} />
    </View>
  ));
};

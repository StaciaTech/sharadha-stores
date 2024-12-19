import React from 'react';
import {View} from 'react-native';
import appColors from '@theme/appColors';
import {Loader} from '@commonComponents';
import styles from './styles';

export const ImageLoader = ({isDark}) => {
  return (
    <View style={styles.containerLoader}>
      <View style={styles.headerContainer}>
        <Loader view={<View style={styles.imgLoader} />} />
      </View>
      <View
        style={[
          styles.separator,
          {
            backgroundColor: isDark ? appColors.darkBorder : appColors.gray,
          },
        ]}
      />
      <Loader view={<View style={styles.nameLoader} />} />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Loader view={<View style={styles.brandLoader} />} />
          <Loader view={<View style={styles.brandLoader2} />} />
        </View>
        <View>
          <View style={styles.container}>
            <Loader view={<View style={styles.priceLoader} />} />
          </View>
          <View style={styles.container2}>
            <Loader view={<View style={styles.priceLoader2} />} />
          </View>
        </View>
      </View>
      <Loader view={<View style={styles.nameLoader} />} />
      <Loader view={<View style={styles.detail1} />} />
      <Loader view={<View style={styles.detail2} />} />
      <Loader view={<View style={styles.detail3} />} />
      <Loader view={<View style={styles.detail4} />} />

      <View style={[styles.container2, {marginTop: 40, marginLeft: 65}]}>
        <Loader view={<View style={styles.priceLoader3} />} />
        <Loader view={<View style={styles.priceLoader3} />} />
        <Loader view={<View style={styles.priceLoader3} />} />
      </View>
      <View style={[styles.container2, {marginLeft: 65}]}>
        <Loader view={<View style={styles.priceLoader3} />} />
        <Loader view={<View style={styles.priceLoader3} />} />
        <Loader view={<View style={styles.priceLoader3} />} />
      </View>
    </View>
  );
};

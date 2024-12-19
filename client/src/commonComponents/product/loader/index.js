import React from 'react';
import {View} from 'react-native';
import OrderStyles from '../styles';
import appColors from '@theme/appColors';
import {Loader} from '@commonComponents';
import {useValues} from '@utils/context';
import styles from './styles';

export const ProductLoader = () => {
  const {viewRTLStyle, isDark} = useValues();
  const productArr = Array.from({length: 8}).map((_, i) => i);

  return productArr.map((_, key) => (
    <View
      key={key}
      style={[
        styles.mainView,
        {
          backgroundColor: isDark ? appColors.dark : appColors.gray,
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Loader view={<View style={styles.txtLoader} />} />
      <View style={OrderStyles.lineView} />
      <View style={styles.nameContainer}>
        <Loader view={<View style={styles.nameLoader} />} />
        <Loader view={<View style={styles.salePriceLoader} />} />
        <View
          style={[
            styles.priceContainer,
            {
              flexDirection: viewRTLStyle,
            },
          ]}>
          <Loader view={<View style={styles.priceLoader} />} />
        </View>
      </View>
    </View>
  ));
};

import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import Quantity from './component/detail/quantity';
import Sku from './component/detail/sku';
import Unit from './component/detail/unit';
import Weight from './component/detail/weight';
import Stock from './component/detail/stock';

export default productInformation = ({ variation, details }) => {
  const { colors } = useTheme();
  return (
    <View
      style={styles.container}>
      <Sku variation={variation} details={details} />
      <View style={[styles.border, { backgroundColor: colors.border }]} />
      <Unit details={details} />
      <View style={[styles.border, { backgroundColor: colors.border }]} />
      <Weight details={details} />
      <View style={[styles.border, { backgroundColor: colors.border }]} />
      <Stock details={details} variation={variation} />
      <View style={[styles.border, { backgroundColor: colors.border }]} />
      <Quantity variation={variation} details={details} />
    </View>
  );
};

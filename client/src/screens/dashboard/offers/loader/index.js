import React from 'react';
import {View} from 'react-native';
import {Loader} from '@commonComponents';
import styles from './styles';

export default loader = () => {
  const lowestPrice = Array.from({length: 4}).map((_, i) => i);
  return lowestPrice.map((_, key) => (
    <Loader view={<View style={styles.recentView} key={key} />} />
  ));
};

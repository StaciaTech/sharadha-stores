import React from 'react';
import {View} from 'react-native';
import {Loader} from '@commonComponents';
import styles from './styles';

export default loader = () => {
  return (
    <View>
      <Loader view={<View style={styles.view} />} />
      <Loader view={<View style={styles.categoryTextView} />} />
      <Loader view={<View style={styles.detailView} />} />
      <Loader view={<View style={styles.detailView2} />} />
      <Loader view={<View style={styles.detailView3} />} />
      <Loader view={<View style={styles.detailView} />} />
      <Loader view={<View style={styles.detailView4} />} />
      <Loader view={<View style={styles.detailTitle} />} />
      <Loader view={<View style={styles.detailView} />} />
      <Loader view={<View style={styles.detailView2} />} />
      <Loader view={<View style={styles.detailView3} />} />
      <Loader view={<View style={styles.detailView} />} />
      <Loader view={<View style={styles.detailView4} />} />
      <Loader view={<View style={styles.detailTitle} />} />
      <Loader view={<View style={styles.detailView} />} />
      <Loader view={<View style={styles.detailView2} />} />
    </View>
  );
};

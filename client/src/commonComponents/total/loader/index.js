import React from 'react';
import {View} from 'react-native';
import {Loader} from '../..';
import styles from './styles';

export default totalLoader = () => {
  return (
    <View style={styles.mainContainer}>
      <Loader view={<View style={styles.mainTitle} />} />
      <View style={styles.container}>
        <Loader view={<View style={styles.mainView} />} />
        <Loader view={<View style={styles.mainView} />} />
      </View>
      <View style={styles.container}>
        <Loader view={<View style={styles.mainView} />} />
        <Loader view={<View style={styles.mainView} />} />
      </View>
      <View style={styles.container}>
        <Loader view={<View style={styles.mainView} />} />
        <Loader view={<View style={styles.mainView} />} />
      </View>
      <View style={styles.container}>
        <Loader view={<View style={styles.mainTitle} />} />
        <Loader view={<View style={styles.mainView} />} />
      </View>
    </View>
  );
};

import {View, Text, Image} from 'react-native';
import React from 'react';
import images from '@utils/images';
import styles from './styles';

const Sale = () => {
  return (
    <View style={styles.container}>
      <Image source={images.sale} style={styles.saleImg} />
      <Text style={styles.saleTitle}>Sale</Text>
    </View>
  );
};
export default Sale;

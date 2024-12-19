import {View, Text} from 'react-native';
import React from 'react';
import {useValues} from '@utils/context';
import styles from './styles';

const Seller = ({variation, details, currSymbol, currValue}) => {
  const {textRTLStyle, viewRTLStyle} = useValues();

  return (
    <View style={[styles.sb, {flexDirection: viewRTLStyle}]}>
      <Text style={[styles.sellerTxt, {textAlign: textRTLStyle}]}>
        Seller: {details?.store?.store_name}
      </Text>
      <Text style={styles.originalPrice}>
        {currSymbol}
        {variation?.price
          ? (currValue * variation?.price).toFixed(2)
          : (currValue * details?.price).toFixed(2)}
      </Text>
    </View>
  );
};

export default Seller;

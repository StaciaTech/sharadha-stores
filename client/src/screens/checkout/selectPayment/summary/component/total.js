import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';

const Total = ({currSymbol, currValue, checkoutData}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.walletView}>
      <Text
        style={[
          styles.placeholderStyle,
          {
            color: colors.text,
          },
        ]}>
        Total
      </Text>
      <Text
        style={[
          styles.placeholderStyle2,
          {
            color: colors.text,
          },
        ]}>
        {currSymbol} {(currValue * checkoutData).toFixed(2)}
      </Text>
    </View>
  );
};

export default Total;

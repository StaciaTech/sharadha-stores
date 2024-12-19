import {View, Text} from 'react-native';
import React from 'react';
import appFonts from '@theme/appFonts';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';

const Tax = ({checkoutData, currSymbol, currValue}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.shippingView}>
      <Text style={{color: colors.text, fontFamily: appFonts.mulish}}>Tax</Text>
      <Text style={{color: colors.text, fontFamily: appFonts.mulish}}>
        {currSymbol}
        {(currValue * checkoutData).toFixed(2)}
      </Text>
    </View>
  );
};

export default Tax;

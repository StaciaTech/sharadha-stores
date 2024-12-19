import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import appFonts from '@theme/appFonts';
import styles from '../styles';

const SubTotal = ({currSymbol, currValue, subTotal}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.subTotalView}>
      <Text style={{color: colors.text, fontFamily: appFonts.mulish}}>
        Subtotal
      </Text>
      <Text style={{color: colors.text, fontFamily: appFonts.mulish}}>
        {currSymbol}
        {(currValue * subTotal).toFixed(2)}
      </Text>
    </View>
  );
};

export default SubTotal;

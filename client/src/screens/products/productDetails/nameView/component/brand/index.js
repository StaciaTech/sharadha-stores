import React from 'react';
import {View, Text} from 'react-native';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const Brand = ({variation, details, currSymbol, currValue}) => {
  const {textRTLStyle, viewRTLStyle} = useValues();
  const {colors} = useTheme();

  return (
    <>
      <Text style={[styles.txt, {color: colors.text, textAlign: textRTLStyle}]}>
        {variation?.name || details?.name}
      </Text>
      <View style={[styles.brand, {flexDirection: viewRTLStyle}]}>
        <Text style={[styles.sellerTxt, {textAlign: textRTLStyle}]}>
          Brand: {details?.brand?.name}
        </Text>
        <View style={{flexDirection: viewRTLStyle}}>
          <Text style={[styles.txt, {color: colors.text}]}>
            {currSymbol}
            {variation?.sale_price
              ? (currValue * variation?.sale_price).toFixed(2)
              : (currValue * details?.sale_price).toFixed(2)}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Brand;

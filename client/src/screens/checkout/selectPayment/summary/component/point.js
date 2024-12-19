import {View, Text} from 'react-native';
import React from 'react';
import appFonts from '@theme/appFonts';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';

const Point = ({currSymbol, currValue, checkoutData, points}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.shippingView}>
      <Text
        style={
          points
            ? {
                color: appColors.primary,
                fontFamily: appFonts.mulishBold,
              }
            : {color: colors.text, fontFamily: appFonts.mulish}
        }>
        Points
      </Text>
      <Text
        style={
          points
            ? {
                color: appColors.primary,
                fontFamily: appFonts.mulishBold,
              }
            : {color: colors.text, fontFamily: appFonts.mulish}
        }>
        {currSymbol}
        {(currValue * checkoutData?.convert_point_amount).toFixed(2)}
      </Text>
    </View>
  );
};

export default Point;

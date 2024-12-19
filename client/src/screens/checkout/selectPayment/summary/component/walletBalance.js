import {View, Text} from 'react-native';
import React from 'react';
import appFonts from '@theme/appFonts';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import appColors from '@theme/appColors';

const WalletBalance = ({currSymbol, currValue, checkoutData, wallet}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.walletView}>
      <Text
        style={
          wallet
            ? {
                color: appColors.primary,
                fontFamily: appFonts.mulishBold,
              }
            : {color: colors.text, fontFamily: appFonts.mulish}
        }>
        Wallet Balance
      </Text>
      <Text
        style={
          wallet
            ? {
                color: appColors.primary,
                fontFamily: appFonts.mulishBold,
              }
            : {color: colors.text, fontFamily: appFonts.mulish}
        }>
        {currSymbol}
        {(currValue * checkoutData?.convert_wallet_balance).toFixed(2)}
      </Text>
    </View>
  );
};

export default WalletBalance;

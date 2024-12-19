import React from 'react';
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {Check} from '@utils/icons';
import {useValues} from '@utils/context';
import styles from './styles';
import SubTotal from './component/subTotal';
import Shipping from './component/shipping';
import Tax from './component/tax';
import Total from './component/total';
import WalletBalance from './component/walletBalance';
import Point from './component/point';

export default summary = ({
  couponApplied,
  couponLoading,
  gatewayValue,
  checkoutData,
  checkout,
  products,
  error,
  setError,
  points,
  setPoints,
  coupon,
  setCoupon,
  wallet,
  setWallet,
  navigation,
  params,
}) => {
  const {colors} = useTheme();
  const {self} = useSelector(state => state.account);
  const {currSymbol, currValue} = useSelector(state => state.other);
  const {token, isDark} = useValues();
  const goToCoupon = () => {
    navigation.navigate('OffersList', {from: 'payment', getCoupon});
  };

  const getCoupon = val => {
    setCoupon(val);
  };
  const fromDelivery = params.from == 'delivery';

  return (
    <View style={styles.buttonContainer}>
      <View
        style={[
          styles.billView,
          {backgroundColor: isDark ? appColors.subDark : appColors.gray},
        ]}>
        <Text style={[styles.billTitle, {color: appColors.primary}]}>
          Bill Summary
        </Text>
        <SubTotal
          subTotal={
            fromDelivery ? checkoutData?.sub_total : params?.item?.subTotal
          }
          currSymbol={currSymbol}
          currValue={currValue}
        />
        <Shipping
          checkoutData={
            fromDelivery ? checkoutData?.shipping_total : params?.item?.shipping
          }
          currSymbol={currSymbol}
          currValue={currValue}
        />
        <Tax
          checkoutData={
            fromDelivery ? checkoutData?.tax_total : params?.item?.tax
          }
          currSymbol={currSymbol}
          currValue={currValue}
        />
        {fromDelivery && (
          <View>
            {self?.point?.balance > 0 && (
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setPoints(!points);
                    checkout(products, gatewayValue, wallet, !points);
                  }}
                  style={styles.pointView}>
                  <View style={styles.checkView}>
                    {points && (
                      <Check
                        color={appColors.primary}
                        height={windowHeight(18)}
                        width={windowWidth(18)}
                      />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.payTitle,
                      {
                        color: colors.text,
                      },
                    ]}>
                    Use Points?
                  </Text>
                </TouchableOpacity>
                <Point
                  checkoutData={checkoutData}
                  currSymbol={currSymbol}
                  currValue={currValue}
                  points={points}
                />
              </View>
            )}
            {self?.wallet?.balance > 0 && (
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setWallet(!wallet);
                    checkout(products, gatewayValue, !wallet, points);
                  }}
                  style={styles.walletClick}>
                  <View style={styles.checkView}>
                    {wallet && (
                      <Check
                        color={appColors.primary}
                        height={windowHeight(18)}
                        width={windowWidth(18)}
                      />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.payTitle,
                      {
                        color: colors.text,
                      },
                    ]}>
                    Use Wallet Balance?
                  </Text>
                </TouchableOpacity>
                <WalletBalance
                  checkoutData={checkoutData}
                  currSymbol={currSymbol}
                  currValue={currValue}
                  wallet={wallet}
                />
              </View>
            )}
            {token && (
              <View>
                <View style={styles.couponTitle}>
                  <Text style={[styles.haveCode, {color: colors.text}]}>
                    Have a Coupon Code ?
                  </Text>
                  <TouchableOpacity activeOpacity={0.8} onPress={goToCoupon}>
                    <Text
                      style={[
                        styles.viewAll,
                        {
                          color: colors.text,
                        },
                      ]}>
                      View All Coupon
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.couponView}>
                  <TextInput
                    value={coupon}
                    onChangeText={val => {
                      setCoupon(val);
                      setError('');
                    }}
                    placeholder="Enter Coupon Code Here..."
                    placeholderTextColor={appColors.placeholder}
                    style={[
                      styles.enterCode,
                      {
                        color: colors.text,
                      },
                    ]}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      Keyboard.dismiss();
                      const val = couponApplied ? '' : coupon;
                      checkout(
                        products,
                        gatewayValue,
                        wallet,
                        points,
                        'coupon',
                        val,
                      );
                    }}
                    activeOpacity={0.8}
                    style={styles.apply}>
                    {couponLoading ? (
                      <ActivityIndicator size={30} color={appColors.white} />
                    ) : (
                      <Text style={styles.textApply}>
                        {couponApplied ? 'Remove' : 'Apply'}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
                <Text style={styles.pointNote}>
                  You Will Earn {checkoutData?.reward_points.toFixed(2)} Points
                  On This Order
                </Text>
                {couponApplied ? (
                  <Text
                    style={[
                      styles.textSaved,
                      {
                        color: colors.text,
                      },
                    ]}>
                    You Saved {currSymbol}
                    {(currValue * checkoutData?.coupon_total_discount).toFixed(
                      2,
                    )}
                    With This Code 🎉
                  </Text>
                ) : !error ? null : (
                  <Text style={styles.errorText}>{error}</Text>
                )}
              </View>
            )}
          </View>
        )}
        <View style={styles.border} />
        <Total
          checkoutData={
            fromDelivery ? checkoutData?.total : params?.item?.total
          }
          currSymbol={currSymbol}
          currValue={currValue}
        />
      </View>
    </View>
  );
};

import React from 'react';
import {
  View,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import SeeAllHeader from '../seeAllHeader';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@utils/context';
import { useSelector } from 'react-redux';
import styles from './styles';
import Clipboard from '@react-native-clipboard/clipboard';
import CouponBackground from './component/couponBackground';

export default coupons = props => {
  const { viewRTLStyle } = useValues();
  const { colors } = useTheme();
  const { currSymbol } = useSelector(state => state.other);

  const goToOffers = () => {
    props.navigation.navigate('OffersList');
  };

  const copyCode = code => {
    ToastAndroid.showWithGravity(
      'Coupon Code Copied',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    Clipboard.setString(code);
  };

  return (
    <>
      {props.data.length > 0 && (
        <View style={[styles.mainView, { backgroundColor: colors.primary }]}>
          <SeeAllHeader
            title={props?.title}
            subtitle={props?.subtitle}
            onPress={goToOffers}
            showAll={props?.data.length > 3}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              styles.content,
              {
                flexDirection: viewRTLStyle,
              },
            ]}>
            {props?.data.map((item, key) => (
              <TouchableOpacity
                key={key}
                activeOpacity={0.9}
                onPress={() => copyCode(item.code)}>
                <CouponBackground currSymbol={currSymbol} item={item} key={key} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

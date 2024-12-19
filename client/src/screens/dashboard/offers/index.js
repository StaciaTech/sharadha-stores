import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, ToastAndroid, View} from 'react-native';
import {Header} from '@commonComponents';
import CouponsView from './couponsView/index';
import {useDispatch, useSelector} from 'react-redux';
import {couponsData} from '@api/store/actions';
import Clipboard from '@react-native-clipboard/clipboard';
import {useTheme} from '@react-navigation/native';
import {NoDataFound} from '@otherComponents';
import images from '@utils/images';
import {useValues} from '@utils/context';
import Loader from './loader';
import {GlobalStyle} from '@style';
import styles from './styles';

export function OffersList({route, navigation}) {
  const {coupons, loading} = useSelector(state => state.coupons);
  const {colors} = useTheme();
  const {isDark} = useValues();

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const copyToClipboard = code => {
    Clipboard.setString(code);
    ToastAndroid.showWithGravity(
      'Coupon Code Copied',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const goBack = val => {
    if (route?.params) {
      navigation.goBack();
      route.params.getCoupon(val);
    }
  };

  const getData = () => {
    dispatch(couponsData(''));
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Header isText titleText={'My Offers'} image />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyle.mainView,
          {
            backgroundColor: colors.background,
          },
        ]}
        contentContainerStyle={styles.contentStyle}>
        {loading ? (
          <Loader />
        ) : coupons.length > 0 ? (
          <CouponsView
            data={coupons}
            copyCode={copyToClipboard}
            onPress={goBack}
          />
        ) : (
          <NoDataFound
            img={isDark ? images.noOffersDark : images.noOffers}
            title={'No Offers Found'}
            subTitle={'Looks Like There Are No Offers :('}
            btnText={'Refresh'}
            onPress={getData}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

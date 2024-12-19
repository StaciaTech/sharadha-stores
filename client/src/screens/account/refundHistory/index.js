import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {FinancialItems, NoDataFound} from '@otherComponents';
import {useDispatch, useSelector} from 'react-redux';
import {refundHistory} from '@api/store/actions';
import {Header} from '@commonComponents';
import {useValues} from '@utils/context';
import images from '@utils/images';
import {useTheme} from '@react-navigation/native';
import {GlobalStyle} from '@style';
import styles from './styles';

export function RefundHistory({}) {
  const dispatch = useDispatch();
  const {refund, loading} = useSelector(state => state.account);
  const {isDark} = useValues();
  const {colors} = useTheme();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(refundHistory());
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.container, {backgroundColor: colors.background}]}>
      <Header isText titleText="Refund History" />
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : refund.length > 0 ? (
        <View style={styles.listContainer}>
          <FlashList
            data={refund}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({item}) => (
              <FinancialItems
                amount={item.amount}
                date={item.created_at}
                detail={item.reason}
                type={item.status}
              />
            )}
          />
        </View>
      ) : (
        <NoDataFound
          title={'No Refunds Found'}
          subTitle={'You Have No Refunds Processed Yet'}
          btnText={'Refresh'}
          img={isDark ? images.noRefundDark : images.noRefund}
          onPress={getData}
        />
      )}
    </SafeAreaView>
  );
}

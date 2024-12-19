import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import ItemsView from './itemsView';
import {useDispatch, useSelector} from 'react-redux';
import {orderHistory} from '@api/store/actions';
import {NoDataFound} from '@otherComponents';
import images from '@utils/images';
import {useValues} from '@utils/context';

export function OrderHistory({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {orderHistoryList, loading} = useSelector(state => state.order);

  const {isDark} = useValues();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(orderHistory());
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <Header isText image titleText={'Order History'} />
      {/* {loading || orderHistoryList?.length > 0 ? ( */}
        <ItemsView
          showLoader={loading}
          navigation={navigation}
          data={orderHistoryList}
        />
      {/* ) : ( */}
        {/* <NoDataFound
          img={isDark ? images.noOrdersDark : images.noOrders}
          title={'No Orders Found!!'}
          subTitle={"Looks Like You Haven't Made Your Any Order Yet"}
          btnText={'Refresh'}
          onPress={getData}
        /> */}
      {/* )} */}
    </SafeAreaView>
  );
}

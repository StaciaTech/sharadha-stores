import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Header, Button} from '@commonComponents';
import appColors from '@theme/appColors';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {GlobalStyle} from '@style';
import AddressView from './addressView';
import {useValues} from '@utils/context';
import {useDispatch, useSelector} from 'react-redux';
import {addressData, deleteAdd, selfData} from '@api/store/actions';
import {updateDefaultAdd} from '@api/store/reducers/accountReducer';
import AddNew from './addNew';
import styles from './styles';

export function SelectAddress({navigation, route}) {
  const {colors} = useTheme();
  const {addresses, loading} = useSelector(state => state.delivery);
  const [selectAdd, setSelectAdd] = useState();
  const dispatch = useDispatch();

  const {viewRTLStyle} = useValues();

  useFocusEffect(
    useCallback(() => {
      getData();
      dispatch(selfData());
      return () => {};
    }, []),
  );

  const getData = () => {
    dispatch(addressData());
  };

  useEffect(() => {
    dispatch(selfData());
  }, []);

  const gotoDelivery = () => {
    dispatch(updateDefaultAdd(selectAdd));
    navigation.goBack();
  };

  const deleteAddress = val => {
    const id = '/' + val;
    const data = {
      id,
      dispatch,
    };
    dispatch(deleteAdd(data));
  };

  const goToAdd = add => {
    navigation.navigate('AddAddress', {add});
  };

  const getVal = val => {
    setSelectAdd(val);
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header
        image
        isText
        titleText={
          route?.params?.from == 'delivery'
            ? 'Select Delivery Address'
            : 'Address'
        }
      />
      <AddNew
        onPress={goToAdd}
        text={'Add New Address'}
        viewAlign={viewRTLStyle}
      />
      <AddressView
        showLoader={loading}
        data={addresses}
        deleteAddress={deleteAddress}
        addAddress={goToAdd}
        getVal={getVal}
        getData={getData}
        selectAdd={selectAdd?.id}
      />
      {!loading &&
        addresses?.length > 0 &&
        route?.params?.from == 'delivery' && (
          <Button
            text={'Select'}
            style={[
              styles.btn,
              {
                backgroundColor: selectAdd
                  ? appColors.primary
                  : appColors.placeholder,
              },
            ]}
            color={appColors.white}
            onPress={selectAdd ? gotoDelivery : null}
          />
        )}
    </SafeAreaView>
  );
}

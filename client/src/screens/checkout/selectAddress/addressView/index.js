import React, { useEffect, useState } from 'react';
import {ScrollView} from 'react-native';
import appColors from '@theme/appColors';
import Loader from './loader';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import {Address, NoDataFound} from '@otherComponents';
import images from '@utils/images';
import styles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from '../../../../api/store/reducers/deliveryAddReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default addressView = props => {
  const {textRTLStyle, viewRTLStyle, viewSelfRTLStyle, isDark, isRTL} =
    useValues();
  const {colors} = useTheme();
  // const addresses = useSelector((state) => state.delivery.addresses); 
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('addresses').then((data) => {
      setAddresses(JSON.parse(data));
    })
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollView,
        {backgroundColor: colors.background},
      ]}
      showsVerticalScrollIndicator={false}>
      {props?.showLoader ? (
        <Loader
          viewAlign={viewRTLStyle}
          selfAlign={viewSelfRTLStyle}
          textAlign={textRTLStyle}
          isDark={isDark}
          isRTL={isRTL}
        />
      ) : addresses?.length > 0 ? (
        addresses?.map((item, index) => {
          return (
            <Address
              borderColor={
                props.selectAdd === item?.id
                  ? appColors.primary
                  : isDark
                  ? appColors.darkDrawer
                  : appColors.gray
              }
              id={index}
              city={item?.city}
              country={item?.country_id}
              onPress={() => props.getVal(item)}
              phone={item?.phone}
              pincode={item?.pincode}
              countryCode={item?.country_code}
              street={item?.street}
              state={item?.state_id}
              title={item?.title}
              showDelete
              editPress={() => props.addAddress(item)}
              deletePress={() => props.deleteAddress(item?.id)}
            />
          );
        })
      ) : (
        <NoDataFound
          img={isDark ? images.emptyAddressDark : images.emptyAddress}
          title={'No Address Found'}
          subTitle={'Add Address For Better Experience'}
          onPress={props.getData}
          btnText={'Refresh'}
        />
      )}
    </ScrollView>
  );
};

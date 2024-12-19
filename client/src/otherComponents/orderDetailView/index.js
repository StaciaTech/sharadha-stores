import React from 'react';
import {View, Text} from 'react-native';
import Loader from './loader';
import {OrderDetails} from '@utils/icons';
import {useValues} from '@utils/context';
import styles from './styles';

const capitalizeEachWord = str => {
  return str?.replace(/\b\w/g, char => char?.toUpperCase());
};

export function OrderDetailsView(props) {
  const {textRTLStyle, viewRTLStyle, isDark} = useValues();
  const capitalizedStatus = capitalizeEachWord(props?.status);

  return props.showLoader ? (
    <Loader viewAlign={viewRTLStyle} isDark={isDark} />
  ) : (
    <View style={[styles.orderDetailView, {flexDirection: viewRTLStyle}]}>
      <OrderDetails />
      <View style={styles.idView}>
        <Text style={styles.id}>Order ID : #{props?.orderNumber}</Text>
        <Text style={[styles.orderDeliver, {textAlign: textRTLStyle}]}>
          Order {capitalizedStatus}
        </Text>
      </View>
    </View>
  );
}

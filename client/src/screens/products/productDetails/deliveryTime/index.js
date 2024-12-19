import React from 'react';
import { View } from 'react-native';
import appColors from '@theme/appColors';
import { useValues } from '@utils/context';
import styles from './styles';
import DeliveryData from './component/delivery';
import ReturnData from './component/returnData';

export default delieveryTime = ({ productDetail, isDark }) => {
  const { viewRTLStyle } = useValues();

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: isDark ? appColors.dark : appColors.gray,
        },
      ]}>
      <View>
        {productDetail?.estimated_delivery_text && (
          <DeliveryData productDetail={productDetail} />
        )}
        <View style={styles.spaceTop} />
        {productDetail?.return_policy_text && (
          <ReturnData productDetail={productDetail} />
        )}
      </View>
    </View>
  );
};

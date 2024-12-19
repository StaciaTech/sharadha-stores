import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Loader from './loader';
import {useValues} from '@utils/context';
import {useSelector} from 'react-redux';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import { windowHeight } from '../../../../theme/appConstant';

export default ItemsView = props => {
  const {textRTLStyle, viewRTLStyle, viewSelfRTLStyle, isDark} = useValues();
  const {currSymbol, currValue} = useSelector(state => state.other);
  const {colors} = useTheme();

  return (
    <View>
      {props.showLoader ? (
        <Loader viewAlign={viewRTLStyle} selfAlign={viewSelfRTLStyle} />
      ) : (
        <View style={{ borderTopColor: '#E5E5E5', borderTopWidth: 1, marginTop: windowHeight(20) }}>
          {/* <Text style={styles.item}>Items</Text> */}
          {props?.data?.map((item, index) => (
            <View>
              <View style={[styles.listView, {flexDirection: viewRTLStyle}]}>
                <Image
                  source={item?.imageNo}
                  style={[
                    styles.img,
                    {
                      backgroundColor: isDark
                        ? appColors.darkDrawer
                        : appColors.gray,
                    },
                  ]}
                />
                <View style={styles.nameView}>
                  <Text
                    style={[
                      styles.nameTxt,
                      styles.rightSpace,
                      {color: props.colors.text},
                    ]}>
                    {item.name}
                  </Text>
                  <Text style={{ color: '#000000' }}>500g</Text>
                  <Text style={[styles.price, {color: props.colors.text}]}>
                    {currSymbol}
                    {item.price}
                    {/* {(currValue * item.pivot.subtotal).toFixed(2)} */}
                  </Text>
                  {item?.pivot?.quantity && (
                    <Text style={[styles.gramTxt, {textAlign: textRTLStyle}]}>
                     {/* 500 g  */}
                    </Text>
                  )}
                </View>
                <Text style={{ color: '#4C5988' }}>Quantity: {item?.quantity}</Text>
                {/* <View style={styles.refundView}>
                  {item.is_return == 0 ? (
                    <Text
                      style={{
                        color: props.colors.text,
                        fontFamily: appFonts.mulish,
                      }}></Text>
                  ) : (
                    <TouchableOpacity
                      onPress={() => props.goToRefund(item)}
                      activeOpacity={1}
                      style={[
                        styles.refund,
                        {
                          opacity: props.status == 'delivered' ? 1 : 0.5,
                        },
                      ]}>
                      <Text style={styles.refundTxt}>Quantity: 1</Text>
                    </TouchableOpacity>
                  )}
                </View> */}
              </View>
              {index < props.data.length - 1 && (
                <View
                  style={[styles.border, {borderBottomColor: colors.border}]}
                />
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

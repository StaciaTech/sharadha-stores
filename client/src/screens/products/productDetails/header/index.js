import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';
import {HeaderArrow, Cart, Search} from '@utils/icons';
import {useSelector} from 'react-redux';
import styles from './styles';

export default header = ({goToCart, goToSearch}) => {
  const {colors} = useTheme();
  const {viewRTLStyle} = useValues();
  const {goBack} = useNavigation();
  const {cartList} = useSelector(state => state.cart);
  const data = cartList?.items || cartList;
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: viewRTLStyle,
        },
      ]}>
      <TouchableOpacity
        onPress={goBack}
        activeOpacity={0.9}
        style={styles.arrow}>
        <HeaderArrow />
      </TouchableOpacity>
      <Text
        style={[
          styles.details,
          {
            color: colors.text,
          },
        ]}>
        Product Detail
      </Text>
      <View
        style={[
          styles.options,
          {
            flexDirection: viewRTLStyle,
          },
        ]}>
        <TouchableOpacity activeOpacity={1} onPress={goToSearch}>
          <Search  />
        </TouchableOpacity>
        <View>
          <TouchableOpacity activeOpacity={1} onPress={goToCart}>
            <Cart color={appColors.primary} />
          </TouchableOpacity>
          {data?.length > 0 && (
            <Text style={styles.items}>{data && data.length}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

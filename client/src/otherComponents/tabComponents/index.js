import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useValues} from '@utils/context';
import {useSelector} from 'react-redux';
import styles from './styles';

export function TabComponents({state, descriptors, navigation}) {
  const {viewRTLStyle} = useValues();

  const {cartList} = useSelector(state => state.cart);
  const data = cartList?.items || cartList;

  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel;
        const Icon = options.tabBarIcon;
        const ActiveIcon = options.activeTabBarIcon;
        const isFocused = state.index === index;
        const onPress = () => {
          navigation.navigate(route.name);
        };
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={onPress}
            style={styles.button}>
            <View style={state.focused}>
              <View>{isFocused ? <ActiveIcon /> : <Icon />}</View>
            </View>
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? appColors.white : '#B5E7E1',
                },
              ]}>
              {label}
            </Text>
            {label == 'Cart' && data?.length > 0 && (
              <Text style={styles.cartItem}>
                {data ? (
                  <>
                    {data.length || 0}
                    {data.length && data.length > 99 && '+'}
                  </>
                ) : (
                  '0'
                )}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

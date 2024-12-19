import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import {DrawerArrow} from '@utils/icons';
import {useValues} from '@utils/context';
import {useSelector} from 'react-redux';
import styles from './styles';

export function MenuItem(props) {
  const {colors} = useTheme();
  const {viewRTLStyle, imageRTLStyle, isDark, isRTL} = useValues();
  const {currSymbol} = useSelector(state => state.other);
  const [showCount, setShowCount] = useState(true);

  const handlePress = () => {
    setShowCount(false);
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[
        styles.mainView,
        {
          width: props.width
            ? props.width
            : props.showSwitch
            ? windowWidth(260)
            : windowWidth(320),
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View style={[styles.currencyContainer, {flexDirection: viewRTLStyle}]}>
        {props.icon || (
          <Text
            style={[
              styles.symbol,
              {
                color: colors.text,
              },
            ]}>
            {currSymbol}
          </Text>
        )}
        <View style={styles.text}>
          <Text
            style={[
              styles.txt,
              isRTL ? styles.txtRight : styles.txtLeft,
              {color: colors.text},
            ]}>
            {props.text}
          </Text>
          {showCount &&
            props.text === 'Notification' &&
            props.count !== undefined &&
            props.count !== 0 && (
              <Text
                style={[
                  styles.count,
                  {
                    backgroundColor: isDark
                      ? appColors.white
                      : appColors.couponBg,
                  },
                ]}>
                {props.count > 99 ? '99+' : props.count}
              </Text>
            )}
        </View>
      </View>
      {!props.showSwitch && (
        <View
          style={[
            styles.arrow,
            {
              borderColor: isDark ? appColors.white : appColors.drawer,
              backgroundColor: isDark ? appColors.darkDrawer : appColors.drawer,
            },
          ]}>
          <View style={{transform: imageRTLStyle}}>
            <DrawerArrow fill={props.fill} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default MenuItem;

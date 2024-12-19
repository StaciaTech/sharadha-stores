import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import styles from './styles';

export function ContinueButton(props) {
  const {isDark} = useValues();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          backgroundColor: isDark ? appColors.darkDrawer : appColors.gray,
        },
      ]}>
      {props.image && <Image source={props.image} style={styles.buttonImage} />}
      <Text
        style={[
          styles.buttonText,
          {color: isDark ? appColors.white : appColors.title},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

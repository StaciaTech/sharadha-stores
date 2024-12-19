import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import styles from './styles';

export function Button({
  height,
  loading,
  onPress,
  disable,
  fontSize,
  color,
  top,
  style,
  text,
}) {
  return (
    <TouchableOpacity
      activeOpacity={loading ? 1 : 0.7}
      onPress={!loading && !disable ? onPress : null}
      style={[
        style,
        styles.button,
        {
          marginTop: top || windowHeight(23),
          opacity: disable ? 0.7 : 1,
          height: height || windowHeight(46),
        },
      ]}>
      {loading ? (
        <ActivityIndicator size={'large'} color={appColors.white} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            {color: color, fontSize: fontSize || fontSizes.FONT21},
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

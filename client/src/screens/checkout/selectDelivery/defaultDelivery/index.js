import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Selected, UnSelect} from '@utils/icons';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default defaultDelivery = ({
  viewRTLStyle,
  colors,
  title,
  onPress,
  deliveryType,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{flexDirection: viewRTLStyle, alignItems: 'center'}}>
      {deliveryType ? (
        <Selected height={windowHeight(28)} width={windowWidth(28)} />
      ) : (
        <UnSelect height={windowHeight(28)} width={windowWidth(28)} />
      )}
      <Text
        style={{
          color: colors.text,
          marginHorizontal: windowWidth(10),
          fontFamily: appFonts.mulish,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

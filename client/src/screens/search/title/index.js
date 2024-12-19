import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';

export default title = ({title}) => {
  const {colors} = useTheme();
  const {textRTLStyle} = useValues();
  return (
    <Text
      style={[
        styles.titleText,
        {
          color: colors.text,
          textAlign: textRTLStyle,
        },
      ]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.mulish,
  },
});

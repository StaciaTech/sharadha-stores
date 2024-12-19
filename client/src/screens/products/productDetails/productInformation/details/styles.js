import {StyleSheet} from 'react-native';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    width: '35%',
    color: appColors.content,
  },
  valueStyle: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT17,
    color: appColors.content,
  },
});

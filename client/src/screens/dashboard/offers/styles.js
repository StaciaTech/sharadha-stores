import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  filter: {
    fontSize: fontSizes.FONT24,
    color: appColors.primary,
    fontFamily: appFonts.mulish,
  },
  coupon: {
    marginTop: windowHeight(20),
  },
});

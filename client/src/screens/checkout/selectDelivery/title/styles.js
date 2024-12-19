import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: windowWidth(26),
  },
  address: {
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT18,
  },
  addressContainer: {
    height: windowHeight(20),
    width: windowWidth(120),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: appColors.primary,
  },
  addressText: {
    color: appColors.white,
    fontFamily: appFonts.mulish,
    fontSize: fontSizes.FONT14,
  },
});

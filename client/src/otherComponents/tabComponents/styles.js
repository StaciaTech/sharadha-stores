import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.primary,
    height: windowHeight(55),
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: appColors.white,
    fontSize: fontSizes.FONT15,
    fontFamily: appFonts.mulish,
  },

  cartItem: {
    position: 'absolute',
    top: windowHeight(8),
    right: windowWidth(26),
    borderRadius: windowHeight(12),
    backgroundColor: appColors.white,
    fontFamily: appFonts.mulishBold,
    maxWidth: windowHeight(18),
    textAlign: 'center',
    fontSize: fontSizes.FONT10,
    textAlignVertical: 'center',
    color: appColors.primary,
    borderWidth: 1,
    borderColor: appColors.primary,
    paddingHorizontal: windowWidth(3),
  },
  focused: {
    height: windowHeight(23),
    justifyContent: 'center',
  },
});
